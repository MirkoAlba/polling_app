import bcrypt from "bcryptjs";
import cookie from "cookie";
import { validateRegisterInput, validateLoginInput } from "../util/validators";
import jwt from "jsonwebtoken";
// uso solo inpuError per gestire nel frontend gli errori custom
import { AuthenticationError, UserInputError } from "apollo-server-micro";

export const userResolver = {
  Query: {
    async Me(_, { id }, context) {
      const me = await context?.prisma?.user.findUnique({
        where: { id },
        include: {
          profile: true,
        },
      });

      return me;
    },

    async VerifyToken(_, { token }, context) {
      if (!token && !context.userId) return false;

      const verificato = jwt.verify(
        token,
        process.env.TOKEN_SECRET_KEY,
        function (err, decoded) {
          return err
            ? {
                message: `Token non valido: ${err.message}`,
                verified: false,
                userId: "",
              }
            : {
                message: "Verificato",
                verified: true,
                userId: decoded.profileId,
              };
        }
      );

      return verificato;
    },
  },

  Mutation: {
    async Register(
      _,
      {
        registerInput: {
          firstName,
          lastName,
          cellNumber,
          email,
          password,
          confirmPassword,
        },
      },
      context
    ) {
      const { valid, errors } = validateRegisterInput(
        firstName,
        lastName,
        cellNumber,
        email,
        password,
        confirmPassword
      );

      if (!valid) {
        throw new UserInputError("Errori", { errors });
      }

      //lo passo string e lo parso int
      cellNumber = parseInt(cellNumber);

      const checkEmail = await context.prisma.profile.findUnique({
        where: {
          email: email,
        },
      });

      if (checkEmail) {
        throw new UserInputError("Email gia esistente!", {
          errors: {
            email: "Email gia esistente!",
          },
        });
      }

      try {
        password = await bcrypt.hash(password, 12);

        const newUser = {
          firstName,
          lastName,
          cellNumber,
        };

        const user = await context.prisma.user.create({
          data: newUser,
        });

        const newProfile = {
          email,
          password,
          createdAt: new Date(),
          isAdmin: false,
          userId: user.id,
          user: { connect: { id: user.id } }, // serve nelle 1 a 1 per collegare le relazioni
        };

        await context.prisma.profile.create({
          data: newProfile,
        });
      } catch (err) {
        console.log(err);
        return "Register not Successfull";
      }

      return "Register Successfull!";
    },

    async Login(_, { email, password }, context) {
      const { valid, errors } = validateLoginInput(email, password);

      if (!valid) {
        // errors.general = "Inserisci i campi!";
        throw new UserInputError("Errori", { errors });
      }

      const profile = await context.prisma.profile.findUnique({
        where: { email: email },
      });

      if (!profile) {
        errors.email = "User non trovato!";
        throw new UserInputError("User non trovato!", { errors });
      }

      const match = await bcrypt.compare(password, profile.password);

      if (!match) {
        errors.password = "Password errata!";
        throw new UserInputError("Password errata!", { errors });
      }

      const token = jwt.sign(
        {
          profileId: profile.id,
        },
        process.env.TOKEN_SECRET_KEY,
        { expiresIn: "2h" }
      );

      context.res.setHeader(
        "Set-Cookie",
        cookie.serialize("jid", token, {
          httpOnly: true,
          // domain: ".example.com",
          secure: process.env.NODE_ENV !== "development",
          maxAge: 6 * 60 * 60 * 1000,
          sameSite: "strict",
          path: "/",
        })
      );

      return token;
    },

    async Logout(_, __, context) {
      if (context.res) {
        context.res.setHeader(
          "Set-Cookie",
          cookie.serialize("jid", "", {
            httpOnly: true,
            // domain: ".example.com",
            secure: process.env.NODE_ENV !== "development",
            maxAge: 1,
            sameSite: "strict",
            path: "/",
          })
        );
        return true;
      } else {
        return false;
      }
    },
  },
};
