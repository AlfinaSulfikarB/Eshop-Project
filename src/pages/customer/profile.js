import React, { Component, useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "../../assets/styles/style.css";
import axios from "axios";
import "../../assets/styles/profile.css";
import { EditTwoTone } from "@ant-design/icons";
import {  Modal } from "antd";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Foot from "../../components/FooterComponent/Footer";


function Demo1() {
  const [cust, setCustomer] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [refresh, setRefresh] = useState(0);
  let navigate = useNavigate();
  useEffect(() => {
    getCustomer();
  }, []);

  const navid = localStorage.getItem("customerId");
  const auth = localStorage.getItem("token");
 
  // const customerId = JSON.parse(saved);

  const config = {
    headers: {
      Authorization: `Bearer ${auth}`,
      "Content-Type": "application/json",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data2 = {
      customerName: e.target.customerName.value,
      phoneNumber: e.target.phoneNumber.value,
      email: e.target.email.value,
      address: e.target.address.value,
    };
    console.log(data2);
    console.log(JSON.stringify(data2));
    axios
      .post(`http://localhost/Eshop/Api/updateprofile.php?id=${navid}`,JSON.stringify(data2))
      .then((response) => {
        console.log(response);
        setRefresh(refresh + 1);
      });
  };


  function getCustomer() {
    let navid = localStorage.getItem("customerId");
    console.log(navid);
    axios
      .get(`http://localhost/Eshop/Api/customerbyid.php?id=${navid}`)
      .then(function (response) {
        console.log(response.data);
        setRefresh(refresh + 1);
        setCustomer(response.data);
        setRefresh(refresh + 1);
      });
  }

  const { id } = useParams();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    window.location.reload();
    
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {cust.map((cust) => (
        <div id="col-10 cont">
          <div className="internal1">
            <div id="but">
              <a onClick={showModal}>
                <EditTwoTone />
              </a>
            </div>
            <table>
              <tr>
                <td> Name: {cust.customerName}</td>
               
              </tr>
              <br/>
              <tr>
                <td> Email: {cust.email}</td>
              
              </tr>
              <br/>
              <tr>
                <td> Phone: {cust.phoneNumber}</td>
              </tr>
              <br/>
              <tr>
                <td> Address: {cust.address}</td>
              </tr>
            </table>
          </div>

          <div className="internal2">
            <img
              src={require(`../../assets/images/profilePic/${cust.profilePicture}`)}
            />
          </div>
        </div>
      ))}
      <Modal
        title="User Edit"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div id="cont-ed">
          <h1> Edit User</h1>
          {cust.map((repos) => {
            return (
              <Box
              
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "80ch" },
                }}
                noValidate
                onSubmit={handleSubmit}
                autoComplete="on"
              >
                <TextField
                  label="Name"
                  id="customerName"
                  name="customerName"
                  defaultValue={repos.customerName}
                  color="secondary"
                  helperText="Please enter your name"
                  style = {{width: 350}}
                />
                <br />
                <TextField
                  label="Email"
                  id="email"
                  name="email"
                  defaultValue={repos.email}
                  color="secondary"
                  helperText="Please enter your email"
                  style = {{width: 350}}
                />
                <br />
                <TextField
                  label="Phone Number"
                  id="phoneNumber"
                  name="phoneNumber"
                  defaultValue={repos.phoneNumber}
                  color="secondary"
                  helperText="Please enter your phone number"
                  style = {{width: 350}}
                />
                <br />
                <TextField
                  label="Address"
                  id="address"
                  name="address"
                  defaultValue={repos.address}
                  color="secondary"
                  helperText="Please enter your address"
                  style = {{width: 350}}
                />
                <br />
                <br />

                <Button
                  color="primary"
                  variant="contained"
                  style = {{width: 350}}
                  type="submit"
                >
                  Update
                </Button>
              </Box>
            );
          })}
        </div>
      </Modal>
    </>
  );
}

export default Demo1;
