import React,{ useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import logo from "./image/logo11.png";
import './index.css';


const Signup = () =>{
    const [fullName, setFullName] = useState({
        fname : "",
        department : "",
        email : "",
        phone : "",
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
   

    const onSubmits = () =>{
       alert("Create Your Form");
    };
    return (
        <>
            <div className="login-box-1">
            <img className="logo-1" src={logo}/>
            <h1>Singn Up</h1>
                <form onSubmit={onSubmits}>    
                    <label>Enter UserName</label>
                    <input 
                    type="text"
                    placeholder="Enter Username"
                    onChange={inputEvent} 
                    name="fname"
                    value={fullName.fname}
                    required
                  
                    />

                    <label>Enter Department</label>
                    <input type="text"
                    placeholder="Enter Department"
                    onChange={inputEvent} 
                    name="department"
                    value={fullName.department}
                    required
                    />

                    <label>Enter Email</label>
                    <input 
                    type="email"
                    placeholder="Enter Email"
                    onChange={inputEvent} 
                    name="email"
                    value={fullName.email} 
                    required
                    />

                    <label>Enter Phone Number</label>
                    <input 
                    type="phone"  
                    placeholder="Enter Phone Number"
                    onChange={inputEvent} 
                    name="phone"
                    value={fullName.phone} 
                    required
                    />

                    <label>Add Image</label>
                    <input 
                    type="file"  
                    placeholder="Add Your Image"
                    onChange={inputEvent} 
                    name="image"
                    value={fullName.image}
                    required
                    />
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        </>
    );
};
export default Signup;