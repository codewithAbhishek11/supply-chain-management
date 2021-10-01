import React, {  } from 'react';
import { useState } from 'react'
import axios from 'axios'
import { url } from '../../common/constants'

const Signup=()=>{
    const[name,setName]=useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')   

const signup=()=>{
    if (email.length === 0) {
        alert('enter email')
      } else if (password.length === 0) {
        alert('enter correct password')
      } 
      else {
        const body={name:name, email:email, password:password}
        axios.post(url+'/authenticate',body).then(response=>{
          const result= response.data
          if(result){
           alert("USer successfully login")
          }else{
            alert("Please check")
          }
        })
      }
        
}
    
return (
            <div>
                <h2 className="page-title">New User SignUp</h2>
                <div className="mb-3">
                    <label htmlFor="">name</label>
                <input
                    onChange={(e) => {
                            setName(e.target.value)
                            }}
                        type="text"
                         className="form-control"
                        />
                        </div>
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

            <div className="mb-3">
                    <label htmlFor=""></label>
                <input
                    onChange={(e) => {
                            setPassword(e.target.value)
                            }}
                        type="password"
                         className="form-control"
                        />
                        </div>                
            <button onClick={signup} className="btn btn-success">
          Login
        </button>

        </div>
    );
}

export default Signup;