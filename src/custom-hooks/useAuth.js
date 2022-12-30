
import {onAuthStateChange} from 'firebase/auth'
import { auth } from '../firebase.config'
import { useState } from 'react'
import { useEffect } from 'react'

const useAuth = () => {

    const[currentUser,setCurrentUser ] = useState({})

    useEffect(()=>{
        onAuthStateChange(auth,(user)=>{
            if(user){
                setCurrentUser(user)
            }
            else{
                setCurrentUser(null)
            }
        })
    })
  return{
   currentUser,
    }
}

export default useAuth