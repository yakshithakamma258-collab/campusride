import { BrowserRouter,Routes,Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OwnerDashboard from "./pages/OwnerDashboard";
import RenterDashboard from "./pages/RenterDashboard";
import BookingPage from ". /pages/BookingPage";

import "./style.css";

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Login/>} />

<Route path="/signup" element={<Signup/>} />

<Route path="/owner" element={<OwnerDashboard/>} />

<Route path="/renter" element={<RenterDashboard/>} />

<Route path="/bookings" element={<BookingPage/>} />

</Routes>

</BrowserRouter>

);

}

export default App;