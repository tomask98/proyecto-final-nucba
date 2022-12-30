import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Col, Row, Container, Form, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/login.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "@firebase/firestore";

import { auth } from "../firebase.config";
import { storage } from "../firebase.config";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Singup() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setUsername] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const singup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (dowloadURL) => {
            //update del perfil
            await updateProfile(user, {
              displayName: username,
              photoURL: dowloadURL,
            });
            //almaceno el perfil en firestore
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: username,
              email,
              photoURL: dowloadURL,
            });
          });
        }
      );

      setLoading(false);

      toast.success("Cuenta creada correctamente");
      navigate("/Login");
      // console.log(user);
    } catch (error) {
      setLoading(false);
      toast.error("ups algo salio mal");
      // console.log(error);
    }
  };

  return (
    <Helmet title="registro">
      <section className="login">
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                <h5 className="fw-bold">Cargando...</h5>
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <Form className="auth__form " onSubmit={singup}>
                  <h3 className="fw-bold fs-4 "> Registrate</h3>
                  <FormGroup className="form__group">
                    <input
                      type="text"
                      placeholder="Ingrese su nombre"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </FormGroup>
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
                  <FormGroup className="form__group">
                    <input
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </FormGroup>

                  <button type="submit" className="log__btn">
                    Crear cuenta
                  </button>
                  <p>
                    ¿Ya tenes cuenta? <Link to="/Login">Iniciar Sesión</Link>
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

export default Singup;
