import React,{ useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import logo from "./image/logo11.png";
import './index.css';


const Login = () =>{
    const [fullName, setFullName] = useState({
        email : "",
        password : ""
    });
    
    const inputEvent = (event) =>{
        console.log(event.target.value);
        console.log(event.target.name);

        const {value, name} = event.target;
        
        setFullName((preValue) =>
        {
            return{
                ...preValue,
                [name] : value,
            }
           
        });
    };
   

    let onSubmits = () =>{
        //let password = "khushi";
        let name = prompt('enter your password :anandi')
        if(name == 'anandi'){
            alert("Form is Submited...!!");
        }else{
            alert("plz enter right Password");
        };
   
    };
    return (
        <>
            <div className="login-box">
            <img className="logo" src={logo}/>
            <h1>Login</h1>
                <form onSubmit={onSubmits}>    
                    <label>Enter Email Id</label>
                    <input 
                    type="email"
                    placeholder="Enter Email"
                    onChange={inputEvent} 
                    name="email"
                    value={fullName.email}

                    />
                    <label>Enter password</label>
                    <input 
                    type="password"
                    placeholder="Enter Password"
                    onChange={inputEvent} 
                    name="password"
                    value={fullName.password}    
                    />
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        </>
    );
};
export default Login;