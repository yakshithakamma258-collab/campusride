import { useState } from "react";
import axios from "axios";
import { FaUser } from "react-icons/fa";
import "./../App.css";

function Login(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const login = async () => {

try{

const res = await axios.post("https://campusride-1.onrender.com/api/bikes",{
email,
password
});

alert("Login successful");

localStorage.setItem("userEmail", res.data.user.email);
localStorage.setItem("userName", res.data.user.name);



const role = res.data.user.role;

if(role==="owner"){
window.location.href="/owner";
}else{
window.location.href="/renter";
}

}catch(err){
alert("Login failed");
}

};

return(

<div className="container">

<div className="container-box col-md-4 mx-auto text-center">

<h2 className="dashboard-title"><FaUser/> CampusRide Login</h2>

<input
className="form-control"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<br/>

<input
className="form-control"
placeholder="Password"
type="password"
onChange={(e)=>setPassword(e.target.value)}
/>

<br/>

<button className="btn btn-success w-100" onClick={login}>
Login
</button>

</div>

</div>

);

}

export default Login;