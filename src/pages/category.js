import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Topbar from "../components/TopBarComponent/Topbar";
import Navbar from "../components/NavbarComponent/Navbar";
import Foot from "../components/FooterComponent/Footer";
import "../assets/styles/style.css";
import { Row, Col, Divider, Button } from "antd";

function Category() {
  const [categories, setCategories] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    getCategories();
  }, []);
  const { id } = useParams();
  function getCategories() {
    axios
      .get(`http://localhost/Eshop/Api/categories/categorybyid.php?id=${id}`)
      .then(function (response) {
        console.log(response.data);
        setCategories(response.data);
      });
  }
  const handleView = (id) => {
    navigate(`../product/:id`);
  };

  return (
    <>
      <Topbar />
      <Navbar />
     
        <section className="col-30 dispCat">
        {categories.map((category, key) => (
          <article className="card001">
            <Row gutter={[5, 1]}>
              <Col className="gutter-row" span={10}>
                <div id="leftbox">
                  <header className="card__title">
                    <h3>{category.productName}</h3>
                  </header>
                  <figure className="card__thumbnail">
                    <img
                      className="productImage"
                      src={require(`../assets/images/products/${category.fileName}`)}
                      width={'200px'} height={'250px'}
                    />
                    <h3 className="productPrice">M.R.P.:₹{category.price}</h3>
                  </figure>
                </div>
                <Link to={`../product/${category.productId}`}>
                  {" "}
                  <Button type="primary">View Details</Button>
                </Link>
              </Col>
            </Row>
          </article>
            ))}
        </section>  

      {/* <Foot /> */}
    </>
  );
}
export default Category;
