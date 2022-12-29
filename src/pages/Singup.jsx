import React ,{useState}from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Col,Row, Container, Form,FormGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/login.css'
import {  createUserWithEmailAndPassword} from "firebase/auth";

import { auth } from '../firebase.config'



function Singup() {

  const [email, setEmail]= useState('')
  const [password, setpassword]= useState('')
  const [user, setuUser]= useState('')
  const [loading, setLoading] = useState(false)

 const singup = async(e)=>{
   e.preventDefault()
   setLoading(true)
   try {
     const userCredential = await createUserWithEmailAndPassword(auth,email,password)

     const user = userCredential.user
     console.log(user);

   } catch (error) {
      
   }

 }

  return <Helmet title='registro'>
    <section className='login'>
      <Container>
        <Row>
          <Col lg='6' className='m-auto text-center' >
            <Form className="auth__form " onSubmit={singup}>
            <h3 className='fw-bold fs-4 '> Registrate</h3>
            <FormGroup className='form__group'> 
              <input type="text" placeholder='Ingrese su nombre' value={user} onChange={e=>setuUser(e.target.value)}/>
              </FormGroup>
              <FormGroup className='form__group'> 
              <input type="email" placeholder='Ingrese su email' value={email} onChange={e=>setEmail(e.target.value)}/>
              </FormGroup>
              <FormGroup className='form__group'> 
              <input type="password" placeholder='Ingrese su contraseña' value={password} onChange={e=>setpassword(e.target.value)} />
              </FormGroup>
              
             <button  type='submit' className="log__btn" >Crear cuenta</button>
             <p>¿Ya tenes cuenta? <Link to='/Login'>Iniciar Sesión</Link></p>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>

  </Helmet>
}

export default Singup