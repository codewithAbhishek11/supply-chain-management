import React from 'react'
import './AdminLandingPage.css'
import {BrowserRouter,Link,Switch,Route} from 'react-router-dom';
import Signin from '../User/Signin';
import { menus } from '../../components/AdminNavMenus';
import Users from './../User/Users';
import Vendors from '../Vendor/Vendors';
import EditVProfile from '../Vendor/EditVendor';
import AddUser from './../User/AddUser';
import EditProfile from './../User/EditProfile';
import AddVendor from './../Vendor/AddVendor';
import DeleteUser from './../User/DeleteUser';
//import SuppliersComplaints from './SupplierComplaints';
//import Logout from '../User/Logout';
//import Logout from '../User/Logout';
import Parts from './../Part/Parts';
import ViewParts from '../Part/ViewParts';
import Orders from './../Order/Orders';
import ViewOrder from './../Order/ViewOrder';
import SaveOrder from '../Order/SaveOrder';

import Cart from './../Order/Cart';

import PlantLandingPage from '../Plant(Admin)/PlantLandingPage';
import ProductsDetails from '../Products(Admin)/ProductsDetails';
import ProductionLandingPage from '../Production(Admin)/ProductionLandingPage';
import ProductionHistory from '../Production(Admin)/ProductionHistory';
import UpComingDeliveryLandingPage from '../ClientOrders(Admin)/UpComingDeliveryLandingPage';
import Dashboard from './../Dashboard(Admin)/Dashboard';
import Suppliers from '../Supplier/SupplierDetails';
//import Complaints from './../Supplier/SupplierComplaints';
import SupplierComplaintsEdit from '../Supplier/EditSupplierComplaints';
import Client from './../Client/Clients';
import Logout from '../User/Logout';


//import Logout from './../User/Logout';



function AdminLandingPage() {


    return (
        <div className="admin-container">
            <BrowserRouter>
            <div className="admin-navbar">
            <div id="title">
                <p>Admin</p>
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
                <Route path="/users" component={Users}></Route>
                <Route path="/add-user" component={AddUser}/>
                <Route path="/edit-profile" component={EditProfile}/>
                <Route path="/vendors" component={Vendors}></Route>
                <Route path="/edit-vprofile" component={EditVProfile}/>
                <Route path="/add-vendor" component={AddVendor}/> 
         <Route path="Logout" component={Logout}/>
                <Route path="/delete-profile" component={DeleteUser}/>
                <Route path="/parts" component={Parts}/> 
                <Route path="/viewParts" component={ViewParts}/>
                <Route path="/orders" component={Orders}/>
                <Route path="/viewOrder" component={ViewOrder}/>
                <Route path="/saveOrder" component={SaveOrder}/>

                <Route path="/cart" component={Cart}/>

                <Route path="/plant" component={PlantLandingPage}></Route>
                <Route path="/products" component={ProductsDetails}></Route>
                <Route path="/production" component={ProductionLandingPage}></Route>
                <Route path="/productionhistory" component={ProductionHistory}></Route>
                <Route path="/client-orders" component={UpComingDeliveryLandingPage}></Route>
                <Route path="/dashboard" component={Dashboard}></Route>

                <Route path="/suppliers" component={Suppliers}></Route>
          <Route path="/clients" component={Client}></Route>
           {/*    <Route path="/scomplaints" component={SuppliersComplaints}></Route>*/}
         <Route path="/complaints" component={SupplierComplaintsEdit}></Route>





            </Switch>
            <div className="admin-footer">
            <p id="copyright">© 2021 Supply Chain Mangement,Inc.All rights reserved</p>
            </div>
            </div>
            </BrowserRouter>
        </div>
    )
}

export default AdminLandingPage