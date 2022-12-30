import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Col, Row, Container, Form, FormGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";

import "../styles/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const singIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
        const user = userCredential.user
      console.log(user);
      setLoading(false);
      toast.success("Bienvenido");
      navigate("/checkout");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <Helmet title="Inicio de sesion">
      <section className="login">
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                {" "}
                <h5 className="fw-bold">Cargando...</h5>{" "}
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <Form className="auth__form " onSubmit={singIn}>
                  <h3 className="fw-bold fs-4 "> Inicio de sesión</h3>

                  <FormGroup className="form__group">
                    <input
                      type="email"
                      placeholder="Ingrese su email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input
                      type="password"
                      placeholder="Ingrese su contraseña"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                    />
                  </FormGroup>
                  <button type="submit" className="log__btn">
                    Iniciar sesion
                  </button>
                  <p>
                    ¿No tenes cuenta? <Link to="/Singup">Registrate</Link>
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Login;
