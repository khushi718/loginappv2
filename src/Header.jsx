import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import logo from "./image/logo-1.jpg";
import { NavLink } from "react-router-dom";



const Header = () =>{
    return(
        <>
        <nav class="navbar navbar-light bg-light m-0">
            <div class="container-fluid">
                <a class="navbar-brand m-0" href="#"><img className="img-1" src={logo}/>ANANDI ANAND</a>  
                <ul>
                <li><NavLink className="link_style" to="/">Login</NavLink></li>
                <li><NavLink className="link_style" to="/signup">Signup</NavLink></li>
                <li><NavLink className="link_style" to="/employeedetails">EmployeeDetails</NavLink></li>
                </ul>
            </div>
        </nav>
        </>
    );
};
export default Header;