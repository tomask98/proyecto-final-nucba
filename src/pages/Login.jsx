import React ,{useState}from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Col,Row, Container, Form,FormGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/login.css'


function Login() {

  const [email, setEmail]= useState('')
  const [password, setpassword]= useState('')
  return <Helmet title='Inicio de sesion'>
    <section className='login'>
      <Container>
        <Row>
          <Col lg='6' className='m-auto text-center'>
            <Form className="auth__form ">
            <h3 className='fw-bold fs-4 '> Inicio de sesión</h3>
             
              <FormGroup className='form__group'> 
              <input type="email" placeholder='Ingrese su email' value={email} onChange={e=>setEmail(e.target.value)}/>
              </FormGroup>
              <FormGroup className='form__group'> 
              <input type="password" placeholder='Ingrese su contraseña' value={password} onChange={e=>setpassword(e.target.value)} />
              </FormGroup>
             <button  type='submit' className="log__btn" >Iniciar sesion</button>
             <p>¿No tenes cuenta? <Link to='/Singup'>Registrate</Link></p>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>

  </Helmet>
}

export default Login