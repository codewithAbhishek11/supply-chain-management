import './App.css'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Home from './pages/User/Home'
import Signin from './pages/User/Signin'
import Signup from './pages/User/Signup'
import { useState } from 'react'
import AdminLandingPage from './pages/Admin/AdminLandingPage';
import UserLandingPage from './pages/UserLanding/UserLandingPage';
import Vsignin from './pages/Vendor/Vsignin'
import VendorLandingPage from './pages/VendorLanding/VendorLandingPage'

function App() {
  const [className,setClassName]=useState("")
  const setClass=()=>{
    setClassName("hide-link")
  }
  return (
    
    < >
    
      <BrowserRouter>
      <div className={`flex-container ${className}` }>
        <h2 id="title-main"> SUPPLY CHAIN MANAGEMENT</h2>
        <Link className={`nav-link`} to="/signin" onClick={setClass}>
              <div className="btn btn-info login-btn">Admin Login</div>      
        </Link>
        <Link className={`nav-link `} to="/vsignin" onClick={setClass}>
        <div className="btn btn-info vendor-btn">User Login</div>        
        </Link>
        <Link className={`nav-link`} to="/vsignin" onClick={setClass}>
        <div className="btn btn-info vendor-btn">Vendor Login</div>        
        </Link>
        </div>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/signin" component={Signin} />
            <Route path="/vsignin" component={Vsignin}/>
            <Route path="/signup" component={Signup} />
            <Route path="/admin-land" component={AdminLandingPage}/>
            <Route path="/user-land" component={UserLandingPage}/>
            <Route path="/vendor-land" component={VendorLandingPage}/>
          </Switch>
      
      </BrowserRouter>
    </>
    
  )
}

export default App
