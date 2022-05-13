import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "antd";
import axios from "axios";
import "../../assets/styles/card.css";
import { Link, useNavigate } from "react-router-dom";
import { Spin } from "antd";
// import Image from '../../assets/images/products';

function Prodcard() {
  let navigate = useNavigate();
  const onClickLink = () => {
    navigate("../product");
  };
  const [prod, setProducts] = useState([]);
  const [load, setLoading] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost/Eshop/Api/featuredproducts.php")
      .then(function (response) {
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      });
    // getProducts();
  }, []);

  return (
    <>
      {load ? (
        <Spin size="large" />
      ) : (
        <>
          <div className="containerfluid">
            <div className="grid">
              {prod.map((user, key) => (
                <Card className="prodCard" bordered={false}>
                  <img
                    className="productImage"
                    id="productImage"
                    src={require(`../../assets/images/products/${user.fileName}`)}
                  />
                  <div className="cardprodhome">
                    <Link to={`../product/${user.productId}`}>
                      {user.productName}
                    </Link>
                    <p>{user.price}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Prodcard;
