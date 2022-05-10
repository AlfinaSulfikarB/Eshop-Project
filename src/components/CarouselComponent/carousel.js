import React from "react";
import { Carousel } from "antd";
import 'antd/dist/antd.css';
import '../../assets/styles/carousel.css';
import '../../assets/images/carousel/17526.jpg'

export default () => (

    <Carousel effect="fade" autoplay>
        <div className='contentStyle'>
            <h3 className="text-content">Amusing collections</h3>
            <img src={require("../../assets/images/carousel/17526.jpg")} width={'100%'} height={'650px'}  />
        </div>
        <div className="contentStyle">
        <h3 >Exciting offers</h3>
            <img src={require("../../assets/images/carousel/5348697.jpg")} width={'100%'} height={'650px'}  />
            
       </div>
        <div className="contentStyle">
            <h3 >Shop Now</h3>
            <img src={require("../../assets/images/carousel/home.jpg")} width={'100%'} height={'650px'}  />
        </div>

    </Carousel>

);