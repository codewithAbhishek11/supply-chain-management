
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { url } from '../../common/constants';

const Vsignin=()=>{
    const [vendorEmail, setEmail] = useState('')
    const [vendorPhone, setPassword] = useState('')   
    
    
  
const saveTokenInLocalStorage=(result)=>{
  localStorage.setItem('vendor',JSON.stringify(result))
}
const history = useHistory()
const login=()=>{
    if (vendorEmail.length === 0) {
        alert('enter email')
      } else if (vendorPhone.length === 0) {
        alert('enter correct password')
      } 
      else {
        const body={vendorEmail:vendorEmail,vendorPhone :vendorPhone}
        axios.post(url+'/vendors/authenticate',body).then(response=>{
          const result= response.data
          console.log(result)
          if(result){
            saveTokenInLocalStorage(result)
            history.push('/vendor-land')
           alert("Vendor successfully login")
          }else{
            alert("Please check")  
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

export default Vsignin