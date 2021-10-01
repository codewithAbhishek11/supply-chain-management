import React from 'react'
import { Link, BrowserRouter, Switch,Route } from 'react-router-dom';
import { menus } from '../../components/UserNavMenus';

import Dashboard from './../Dashboard(Admin)/Dashboard';

import Suppliers from '../User/SupplierDetails';
import Client from './../User/Clients';
import Vendors from './../User/Vendors';
import Vehicles from '../User/Vehicle/VehicleDetails';


//import Logout from './../User/Logout';

import User_PlantLandingPage from '../Plants(User)/User_PlantLandingPage';
import User_ProductsDetails from '../Products(User)/User_ProductsDetails';
import User_UpComingDeliveryLandingPage from '../UpcomingDelivery(User)/User_UpComingDeliveryLandingPage';
import UpcomingProduction from '../UpComingProduction(User)/UpcomingProduction';
import User_Dashboard from '../Dashboard(User)/User_Dashboard';


import SuppliedDelivery from './../UpcomingDelivery(User)/SuppliedOrderview';

import SuppliedDetails from '../UpcomingDelivery(User)/SuppliedDetails';
import Revenue from '../Revenue(User)/Revenue';
import Logout from '../User/Logout';
import SupplierComplaintsEdit from './../User/Complaints/EditSupplierComplaints';
import ComplaintDetails from './../User/Complaints/ComplaintsSupplierDetails';
import Complaints from '../User/Complaints/SupplierComplaints';




function UserLandingPage(){
    const user=JSON.parse(localStorage.getItem('user'))
    return (
        <div className="admin-container">
            <BrowserRouter>
            <div className="admin-navbar">
            <div id="title">
                <p>Hi, {user.name}</p>
            </div>
            <div className="all-navigations">
            
            {
                menus.map((menu)=>{
                    return(
                        
                        <Link to={menu.route}>
                        <div id="admin-user-nav">
                            <p id="logo">{menu.logo}</p>
                            <p> {menu.title}</p>
                        </div>
                        </Link>
                    )
                })
            }  
            </div>
            </div>
            <div className="admin-content">
            <div className="admin-header">
                <Link to="/logout">
                <button className="btn btn-secondary btn-sm logout-btn">Logout</button>
                </Link>
            </div>
            <Switch>

  
  <Route path="/suppliers1" component={Suppliers}></Route>
  <Route path="/clients1" component={Client}></Route>
  <Route path="/vendors1" component={Vendors}></Route>
  <Route path="/vehicles" component={Vehicles}></Route>
  <Route path="/dashboard" component={Dashboard}></Route>


    
  <Route path="/scomplaints" component={Complaints}></Route>
         <Route path="/complaints" component={SupplierComplaintsEdit}></Route>

            <Route path="/logout" component={Logout}/>
            <Route path="/plant" component={User_PlantLandingPage}></Route>
            <Route path="/products" component={User_ProductsDetails}></Route>
            <Route path="/upcoming-deliveries" component={User_UpComingDeliveryLandingPage}></Route>
            <Route path="/upcoming-production" component={UpcomingProduction}></Route>
            <Route path="/user-dashboard"component={User_Dashboard}></Route>


            <Route path="/suppliedOrder"component={SuppliedDelivery}></Route>
            <Route path="/revenue" component={Revenue}></Route>

            </Switch>
            <div className="admin-footer">
            <p id="copyright">© 2021 Supply Chain Mangement,Inc.All rights reserved</p>
            </div>
            </div>
            </BrowserRouter>
        </div>
    )    
}
export default UserLandingPage
