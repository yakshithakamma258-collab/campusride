import { useState } from "react";
import axios from "axios";
import { FaUserPlus } from "react-icons/fa";
import "./../App.css";

function Signup(){

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [role,setRole]=useState("renter");

const signup = async ()=>{

try{

await axios.post("http://localhost:5000/api/auth/signup",{
name,email,password,role
});

alert("Account created successfully");

}catch(err){
alert(err.response?.data?.message || "Signup failed");
}

};

return(

<div className="container">

<div className="container-box col-md-4 mx-auto text-center">

<h2 className="dashboard-title"><FaUserPlus/> Signup</h2>

<input className="form-control" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
<br/>

<input className="form-control" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
<br/>

<input className="form-control" placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
<br/>

<select className="form-control" onChange={(e)=>setRole(e.target.value)}>
<option value="owner">Owner</option>
<option value="renter">Renter</option>
</select>

<br/>

<button className="btn btn-primary w-100" onClick={signup}>
Create Account
</button>

</div>

</div>

);

}

export default Signup;