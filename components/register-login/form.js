import { Fragment, useState } from "react";

import { useMutation, gql } from "@apollo/client";
// import { setAccessToken } from "../../src/client/accessToken";
import { useRouter } from "next/router";
import Image from "next/image";

import { Form, Button, Row, Col } from "react-bootstrap";

export default function RegisterLoginForm({ isLoggedIn }) {
  const router = useRouter();

  const [showForm, setShowForm] = useState(false);

  const [errors, setErrors] = useState({});

  // login input
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  // register input
  const [registerInput, setRegisterInput] = useState({
    firstName: "",
    lastName: "",
    cellNumber: 0,
    email: "",
    password: "",
    confirmPassword: "",
  });

  console.log(registerInput.cellNumber);

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: { userEmail, userPassword },
    onCompleted: (data) => {
      // setto token ritornato dalla login mutation
      setAccessToken(data.Login);
      router.push("/");
    },
    onError: (err) => {
      if (err) {
        // custom errors defined in validaotrs.js, returned from server
        setErrors(err.graphQLErrors[0]?.extensions.exception.errors);
      }
    },
  });

  const [register] = useMutation(REGISTER_MUTATION, {
    variables: { registerInput },
    onCompleted: (data) => console.log(data.Register),
    onError: (err) => {
      setErrors(err.graphQLErrors[0]?.extensions.exception.errors);
    },
  });

  function handleSubmitLogin(e) {
    e.preventDefault();
    login();
  }

  function handleSubmitRegister(e) {
    e.preventDefault();
    register();
  }

  const handleShowForm = () => {
    setShowForm(!showForm);
    setErrors({});
  };

  return (
    <Row className="row-form">
      {showForm ? (
        <Fragment>
          <Col
            xs={12}
            lg={6}
            className="d-none d-lg-flex align-items-center m-lg-0 p-lg-0"
          >
            <div className="wrapper w-100 d-flex align-items-center">
              <div>Logo</div>
            </div>
          </Col>
          <Col
            xs={12}
            lg={6}
            className="d-flex align-items-center m-lg-0 p-lg-0 col-right"
          >
            <div className="wrapper wrapper__right w-100 d-flex align-items-center">
              <Form onSubmit={(e) => handleSubmitRegister(e)} className="w-100">
                <div>
                  <Form.Label className="form-label">Nome</Form.Label>
                  <Form.Control
                    className="form-input"
                    type="text"
                    placeholder="Inserisci il tuo Nome"
                    onChange={(e) =>
                      setRegisterInput({
                        ...registerInput,
                        firstName: e.target.value,
                      })
                    }
                    isInvalid={errors.firstName ? true : false}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </div>

                <div className="mt-4">
                  <Form.Label className="form-label">Cognome</Form.Label>
                  <Form.Control
                    className="form-input"
                    type="text"
                    placeholder="Inserisci il tuo Cognome"
                    onChange={(e) =>
                      setRegisterInput({
                        ...registerInput,
                        lastName: e.target.value,
                      })
                    }
                    isInvalid={errors.lastName ? true : false}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                </div>

                <div className="mt-4">
                  <Form.Label className="form-label">
                    Numero di telefono
                  </Form.Label>
                  <Form.Control
                    className="form-input"
                    type="number"
                    placeholder="Inserisci il tuo Numero di telefono"
                    onChange={(e) =>
                      setRegisterInput({
                        ...registerInput,
                        cellNumber: parseInt(e.target.value),
                      })
                    }
                    isInvalid={errors.cellNumber ? true : false}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.cellNumber}
                  </Form.Control.Feedback>
                </div>

                <div className="mt-4">
                  <Form.Label className="form-label">Email</Form.Label>
                  <Form.Control
                    className="form-input"
                    type="email"
                    placeholder="Inserisci la tua E-mail"
                    onChange={(e) =>
                      setRegisterInput({
                        ...registerInput,
                        email: e.target.value,
                      })
                    }
                    isInvalid={errors.email ? true : false}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </div>

                <div className="mt-4">
                  <Form.Label className="form-label">Password</Form.Label>
                  <Form.Control
                    className="form-input"
                    type="password"
                    placeholder="Inserisci la Password"
                    onChange={(e) =>
                      setRegisterInput({
                        ...registerInput,
                        password: e.target.value,
                      })
                    }
                    isInvalid={errors.password ? true : false}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </div>

                <div className="my-4">
                  <Form.Label className="form-label">
                    Conferma Password
                  </Form.Label>
                  <Form.Control
                    className="form-input"
                    type="password"
                    placeholder="Inserisci di nuovo la Password"
                    onChange={(e) =>
                      setRegisterInput({
                        ...registerInput,
                        confirmPassword: e.target.value,
                      })
                    }
                    isInvalid={errors.confirmPassword ? true : false}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.confirmPassword}
                  </Form.Control.Feedback>
                </div>

                <Button className="btn__inverted" type="submit">
                  Registrati
                </Button>

                <p onClick={handleShowForm} className="change-tab mt-5">
                  Hai già un Account? <strong>Accedi</strong>
                </p>
              </Form>
            </div>
          </Col>
        </Fragment>
      ) : (
        <Fragment>
          <Col
            xs={12}
            lg={6}
            className="d-none d-lg-flex align-items-center m-lg-0 p-lg-0"
          >
            <div className="wrapper__left w-100 d-flex align-items-center">
              <div>Logo</div>
            </div>
          </Col>
          <Col
            xs={12}
            lg={6}
            className="d-flex align-items-center m-lg-0 p-lg-0 col-right"
          >
            <div className="wrapper__right w-100 d-flex align-items-center">
              <Form onSubmit={(e) => handleSubmitLogin(e)} className="w-100">
                <div>
                  <Form.Label className="form-label">Email</Form.Label>
                  <Form.Control
                    className="form-input"
                    type="email"
                    placeholder="Inserisci la tua E-mail"
                    onChange={(e) => setUserEmail(e.target.value)}
                    isInvalid={errors.userEmail ? true : false}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.userEmail}
                  </Form.Control.Feedback>
                </div>

                <div className="my-4">
                  <Form.Label className="form-label">Password</Form.Label>
                  <Form.Control
                    className="form-input"
                    type="password"
                    placeholder="Inserisci la tua E-mail"
                    onChange={(e) => setUserPassword(e.target.value)}
                    isInvalid={errors.userPassword ? true : false}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.userPassword}
                  </Form.Control.Feedback>
                </div>

                <Button className="btn__inverted" type="submit">
                  Accedi
                </Button>

                <p onClick={handleShowForm} className="change-tab mt-5">
                  Non hai ancora un Account? <strong>Registrati!</strong>
                </p>
              </Form>
            </div>
          </Col>
        </Fragment>
      )}
    </Row>
  );
}

const REGISTER_MUTATION = gql`
  mutation register($registerInput: RegisterInput!) {
    Register(registerInput: $registerInput)
  }
`;

const LOGIN_MUTATION = gql`
  mutation login($userEmail: String!, $userPassword: String!) {
    Login(email: $userEmail, password: $userPassword)
  }
`;
