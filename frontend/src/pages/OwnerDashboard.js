import { useState } from "react";
import axios from "axios";

function OwnerDashboard(){

const [name,setName] = useState("");
const [brand,setBrand] = useState("");
const [price,setPrice] = useState("");
const [image,setImage] = useState("");

const addBike = async () => {

try{

await axios.post("http://localhost:5000/api/bikes/add",{

name,
brand,
price,
image,
ownerEmail: localStorage.getItem("userEmail")

});

alert("Bike added successfully");

}catch(err){

console.log(err);
alert("Error adding bike");

}

};

return(

<div style={{padding:"30px"}}>

<h1>Owner Dashboard</h1>

<input
placeholder="Bike Name"
onChange={(e)=>setName(e.target.value)}
/>

<br/><br/>

<input
placeholder="Brand"
onChange={(e)=>setBrand(e.target.value)}
/>

<br/><br/>

<input
placeholder="Price"
onChange={(e)=>setPrice(e.target.value)}
/>

<br/><br/>

<input
placeholder="Bike Image URL"
onChange={(e)=>setImage(e.target.value)}
/>

<br/><br/>

<button onClick={addBike}>
Add Bike
</button>

</div>

);

}

export default OwnerDashboard;