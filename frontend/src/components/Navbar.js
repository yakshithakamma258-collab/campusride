import { FaMotorcycle, FaUserCircle } from "react-icons/fa";
import "../style.css";

function Navbar(){

const userName = localStorage.getItem("userName");

return(

<div className="navbar">

<div className="logo">
<FaMotorcycle size={22}/> CampusRide
</div>

<div className="user">
<FaUserCircle size={20}/> {userName}
</div>

</div>

);

}

export default Navbar;