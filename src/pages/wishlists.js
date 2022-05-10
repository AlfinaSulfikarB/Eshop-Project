import React from "react";
import Wishlist from  './customer/wishlist';
import Foot from "../components/FooterComponent/Footer";
import Navbar from "../components/NavbarComponent/Navbar";
import Topbar from '../components/TopBarComponent/Topbar';
import '../assets/styles/wishlist.css';

function wish(){

    return(
        <>
        <div className="style">
        <Topbar/>
        <br/>
        <Navbar/>
        <Wishlist />
        <br/>
        <br/>
        <Foot/>
        </div>
        </>
    )
}
export default wish;