import React, { useEffect, useState } from "react";
import Topbar from "../../components/TopBarComponent/Topbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import '../../assets/styles/profile.css';
import { Button,message } from 'antd';



function UpdateProfile() {
  const [cust, setCustomer] = useState([]);
  const handleSubmit = e => {
    e.preventDefault();
    console.log(cust);
  };
  const [isSubmitting, setIsSubmitting] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    getCustomer();
  }, []);

  function getCustomer() {
    let navid= localStorage.getItem('customerId');
        console.log(navid);
    axios
      .get(`http://localhost/Eshop/Api/customerbyid.php?id=${navid}`)
      .then(function (response) {
        console.log(response.data);
        setCustomer(response.data);
        
      });
  }

  const handleClear = () => {
    navigate("../customer/2");
  }
  const handleUpdate = (event) => {
    
    let navid= localStorage.getItem('customerId');
        console.log(navid);
    axios.put(`http://localhost/Eshop/Api/updateprofile.php?id=${navid}`, 
    JSON.stringify(value))
      .then(function (response) {
        console.log(response.data);
        message.success("Profile Updated");
        navigate(`../customer/${navid}`);
       
      })
    
  }

  const value =({
    
  })
  const handleChange = (event) => {
  const { name, value } = event.target;
        setCustomer({ ...cust, [name]: value});
  // const { name, value } = event.target;
  // setCustomer({ ...cust, [name]: value });
  }
  return (
  <>
   <Topbar />
    {cust.map((custm) => (
      <div id="cont-ed">
        <h1> Edit User</h1>
        <form >
          <table id="editdata"colSpan={100}>
            <tbody>
              <tr>
                
                  <label>Name: </label>
                
                <td>
                  <input defaultValue={custm.customerName} value={cust.customerName}type="text" name="name"   onChange={(e)=>{this.setState({email:e.target.value})}}     />
                </td>
              </tr>
              <tr>
                
                  <label>Email: </label>
              
                <td>
                  <input defaultValue={custm.email} value={cust.customerName} type="text" name="email"   onChange={(e)=>{this.setState({email:e.target.value})}}    />
                </td>
              </tr>
              <tr>
               
                  <label>Mobile: </label>
              
                <td>
                  <input defaultValue={custm.phoneNumber} value={cust.customerName} type="text" name="phoneNumber"   onChange={(e)=>{this.setState({phoneNumber:e.target.value})}}    />
                </td>
              </tr>
              <tr>
               
                  <label>Address: </label>
               
                <td>
                  <input defaultValue={custm.address} value={cust.customerName} type="text" name="address"   onChange={(e)=>{this.setState({address:e.target.value})}}    />
                </td>
              </tr>
              <tr>
               
                <td colSpan="3" align="right">
                  <Button type="primary" ghost onClick={handleUpdate}>Update</Button>
                </td>
                <td colSpan="2" align="left">
                  <Button type="danger" ghost onClick={handleClear}>Cancel</Button>
                </td>
               
              </tr>

            </tbody>
          </table>
        </form>

        </div>
        ))}


        </>);
}
export default UpdateProfile;