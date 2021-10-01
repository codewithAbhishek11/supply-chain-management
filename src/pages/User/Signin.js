import React, {} from 'react';
import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { url } from '../../common/constants'
import './Signin.css'

const Signin=()=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')   
    
    
  
const saveTokenInLocalStorage=(result)=>{
  localStorage.setItem('user',JSON.stringify(result))
}
const history = useHistory()
const login=()=>{
    if (email.length === 0) {
        alert('enter email')
      } else if (password.length === 0) {
        alert('enter correct password')
      } 
      else {
        const body={email:email, password:password}
        axios.post(url+'/user/authenticate',body).then(response=>{
          const result= response.data
          if(result){
            saveTokenInLocalStorage(result)
            if(result.role==='Admin'){
                history.push('/admin-land')
            }
            else{
              history.push('/user-land')
            } 
           alert("User successfully login")
          }else{
            alert("Please check the credentials")  
          }
        })
      }
        
}



    
return (
    <div className="full-page">
      <div className="gif-page"></div>
      <div className="login-page">
           <h2 className="page-title">Login</h2>
           <div className="mb-3">
               <label htmlFor="">Email</label>
           <input
               onChange={(e) => {
                       setEmail(e.target.value)
                       }}
                   type="email"
                    className="form-control"
                   />
                   </div>
           <div className="mb-3">
           <label htmlFor="">Password</label>
           <input
               onChange={(e) => {
                   setPassword(e.target.value)
               }}
               type="password"
               className="form-control"
           />
       </div>
       <button onClick={login} className="btn btn-success">
     Login
   </button>
              
   </div>

    </div>         
    );
}
export default Signin;