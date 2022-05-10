import React, { useState } from "react";
import Foot from "../components/FooterComponent/Footer";
import Topbar from "../components/TopBarComponent/Topbar";
import Navbar from "../components/NavbarComponent/Navbar";
import "../assets/styles/home.css";
import { useNavigate } from "react-router-dom";
import Carousel from "../components/CarouselComponent/carousel";
import Card from "../components/ProductCard/card";
function Home() {
  let navigate = useNavigate();
  const [width, setWindowWidth] = useState(0);
//   const updateDimensions = () => {
    // const width = window.innerWidth;
    // setWindowWidth(width);
//   };
//   const handleClick0 = (e) => {
//     navigate("../home");
//   };

  return (
    <>
      <div className="maindiv">
        <Topbar />
      </div>
      <Navbar />
      <div className="home-content">
        <Carousel />
        <div className="featured">
          <h3>Featured Products</h3>
          <Card />
        </div>
      </div>
      <Foot />
    </>
  );
}
export default Home;
