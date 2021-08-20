import { createPrismaClient } from "../../../apollo/server/db/context";
import Grid from "../../../components/prodotti/grid";

// /prodotti/[categoryName]
// ex: /prodotti/pizze
export default function CategoryName({ isLoggedIn, categoryName }) {
  return <Grid isLoggedIn={isLoggedIn} categoryName={categoryName} />;
}

export async function getStaticProps(context) {
  const { categoryName } = context.params;
  const prisma = createPrismaClient();
  const category = await prisma?.category.findFirst({
    where: {
      categoryName,
    },
  });
  return {
    props: {
      categoryName: category
        ? category.categoryName
        : "Categoria non esistente",
    },
  };
}

export async function getStaticPaths(context) {
  const prisma = createPrismaClient();
  const categories = await prisma?.category.findMany();

  return {
    paths: categories.map((d) => ({
      //categoryName è lo slug e deve essere uguale a quello che c'è nel context.params in getStaticProps
      params: { categoryName: d.categoryName },
    })),
    fallback: "blocking",
    //false:
    // 1. se un paths non esiste (non viene ritornato da getStaticPaths) nextjs renderizza una 404
    // 2. si usa quando nuove pagine vengono aggiunte raramente e complessivamente sono poche
    //true:
    // 1. i paths non generati al build time (non esistenti) nextjs servirà una versione fallback di tale pagina
    // 2. in background nextjs genererà staticamente html e json del path
    // 3. quando ha finito switcherà la pagina generata con quella fallback
    //blocking:
    // 1. i paths non generati al build time (non esistenti) nextjs renderizzerà la pagina sul server e poi genererà html e json
    // 2. quando finisce di caricare la pagina sul server il browser la renderizzerà: l'utente visionerà un caricamento per la pagina
  };
}
