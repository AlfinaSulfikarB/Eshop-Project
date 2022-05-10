import React from "react";
import { useNavigate,useState } from "react-router-dom";
import logo from "../TopBarComponent/eshop.png";
import "../../assets/styles/topbar.css";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Toolbar from "@material-ui/core/Toolbar";
import LogoutIcon from "@mui/icons-material/Logout";



function Topbar() {
  let navigate = useNavigate();
  const onClickPerson = () => {
    let navid= localStorage.getItem('customerId');
        console.log(navid);
    navigate("../customer/navid");
  };
  const onClickFav = () => {
    navigate("../wishlist");
  };
  const onClickCart = () => {
    navigate("../cart");
  };
  const onClickLog = () => {
    localStorage.clear();
    navigate("/");
  };
 
  return (
    <>
      <header>
        <div className="horizontal-container">
          <div className="child-right">
            {/* logo */}
            <div className="logo-container">
              <img src={logo} alt="logo" />
            </div>
          </div>

          <div className="child-left">
         
            <Toolbar>
          {window.localStorage.getItem('customerName')}
            <div id="customer">
                <PersonPinIcon onClick={onClickPerson} />
              </div>
              <FavoriteIcon onClick={onClickFav} style={{ color: "	#C61562" }} />
              &nbsp; &nbsp; &nbsp;
              <ShoppingCartIcon
                onClick={onClickCart}
                style={{ color: "black" }}
              />
              &nbsp;&nbsp;&nbsp;
              <LogoutIcon onClick={onClickLog} style={{ color: "black" }} />
            </Toolbar>
          </div>
        </div>
        <div className="horizontal-container2">
          <hr />
        </div>
      </header>
    </>
  );
}
export default Topbar;
