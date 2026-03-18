import { useState } from "react";
import axios from "axios";

function Signup(){

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [role,setRole] = useState("renter");

const signup = async () => {

try{

await axios.post(
"https://campusride-1.onrender.com/api/auth/signup",
{
name,
email,
password,
role
}
);

alert("Account created successfully");
window.location.href="/";

}catch(err){
alert("Signup failed");
console.log(err);
}

};

return(

<div>

<h1>Signup</h1>

<input placeholder="Name" onChange={(e)=>setName(e.target.value)} />
<br/><br/>

<input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
<br/><br/>

<input placeholder="Password" type="password"
onChange={(e)=>setPassword(e.target.value)} />
<br/><br/>

<select onChange={(e)=>setRole(e.target.value)}>
<option value="owner">Owner</option>
<option value="renter">Renter</option>
</select>

<br/><br/>

<button onClick={signup}>Create Account</button>

</div>

);

}

export default Signup;