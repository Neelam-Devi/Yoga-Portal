import React,{useEffect} from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

const Auth = ({children}) => {

    const navigate = useNavigate()

    useEffect(()=>{
       const email =  Cookies.get('email')
       const password = Cookies.get('password')

       if (!email || !password || email !== 'admin@gmail.com' || password !== 'admin@123') {
        console.log('not login')
        navigate('/login')
       }
       else{
        console.log('login')
       }

    },[])

  return (
    <div>{children}</div>
  )
}

export default Auth