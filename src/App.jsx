import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Signup from "./Signup";
import EmployeeDetails from "./EmployeeDetails";


    const App = () =>{
        return(
            <>
            <Header/>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route  path="/signup" component={Signup}/>
                <Route  path="/employeedetails" component={EmployeeDetails}/>
            </Switch>
            </>
        );
    };
    export default App;
