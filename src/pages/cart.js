import React from "react";
import Foot from "../components/FooterComponent/Footer";
import Topbar from "../components/TopBarComponent/Topbar";
import Navbar from "../components/NavbarComponent/Navbar";
import Car from "./customer/basket";

function Cart(){

    return(
        <>
        <div className="style">
            <Topbar/>
            <br/>
            <Navbar />
            <br/>
            <Car/>
            <br/>
            <br/>
            <br/>
            <Foot/>
            
        </div>
        </>
    );
}

export default Cart;