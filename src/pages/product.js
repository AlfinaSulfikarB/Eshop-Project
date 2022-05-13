import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Topbar from "../components/TopBarComponent/Topbar";
import Navbar from "../components/NavbarComponent/Navbar";
import Foot from "../components/FooterComponent/footer";
import { Button, message } from "antd";
import axios from "axios";
import "../assets/styles/product.css";
import { Card } from 'antd';

function Product() {
  const navigate = useNavigate();
  const [prod, setProducts] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);
  function getProduct() {
    axios
      .get(`http://localhost/Eshop/Api/product.php?id=${id}`)
      .then(function (response) {
        console.log(response.data);
        setProducts(response.data);
      });
  }
  const handlewishlist = (prodId) => {
    let navid = localStorage.getItem("customerId");
    console.log(navid);
    axios
      .post(`http://localhost/Eshop/Api/wishlist-add.php?custId=${navid}&prodId=${prodId}`)
      .then(function (response) {
        console.log(response.data);
        message.success("Added to Wishlist");
      });
  };
  
  const handleCart = (prodId) => {
    let navid = localStorage.getItem("customerId");
    console.log(navid);
    axios
      .post(`http://localhost/Eshop/Api/cart/addtocart.php?custId=${navid}&prodId=${prodId}`)
      .then(function (response) {
        console.log(response.data);
        message.success("Added to Cart");
      });
  };
  const { id } = useParams();
  function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  return (
    <>
      <Topbar />
      <Navbar />
      {/* {prod.map((user)=>
    <div className="site-card-border-less-wrapper">
    
    <Card title={user.productName} bordered={false} style={{ width: 300 }}>
      <p></p>
      <p>Card content</p>
      <p>Card content</p>
    </Card> 
    
  </div>
  )}*/}
      <section className="card-container">
        {prod.map((user) => (
          <Card style={{ width: 1000}}>
          <article className="cardprod">
            <div id="leftbox">
              <header className="card__title">
                <h3>{user.productName}</h3>
              </header>
              <figure className="card__thumbnail">
                <img
                  className="productImage"
                  src={require(`../assets/images/products/${user.fileName}`)}
                />
                <h3 className="productPrice">M.R.P.:₹{user.price}</h3>
              </figure>
            </div>
            <div id="rightbox">
              <p>Product Description: {user.shortDescription}</p>
              <main className="card__description">
                <a onClick={myFunction}>
                  <div id="myDIV">
                    <div className="myDIV">Show less:</div>
                    {user.specification}
                  </div>
                  View Specifications:
                </a>
              </main>
            </div>
            <a className="button001" onClick={()=>handleCart(user.productId)}>
              Add to Cart
            </a>
            
            <a className="button2" onClick={()=>handlewishlist(user.productId)}>
              Add to WishList
            </a>
          </article>
          </Card>
        ))}
      </section>
      <Foot />
    </>
  );
}
export default Product;
