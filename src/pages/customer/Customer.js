import React, {Component, Fragment} from "react";
import Topbar from "../../components/TopBarComponent/Topbar";
import Navbar from "../../components/NavbarComponent/Navbar";
import "../../assets/styles/customer.css";
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {UserOutlined } from '@ant-design/icons';
import {LockOutlined} from '@ant-design/icons';
import {HeartOutlined} from '@ant-design/icons';
import {MessageOutlined} from '@ant-design/icons';
import {ShoppingCartOutlined} from '@ant-design/icons';
import Demo1 from "./profile";
import Demo2 from "./password";
import Demo3 from "./contact";
import Wishlist from "./wishlist";
import Foot from "../../components/FooterComponent/Footer";
import Cart from "./basket";  

const drawerWidth = 240;

class Customer extends Component{
    constructor() {
        super();
        this.state = {
          name: "React",
          showHideDemo1: true,
          showHideDemo2: false,
          showHideDemo3: false,
          showHideDemo4: false,
        
          

        };
    
        this.hideComponent = this.hideComponent.bind(this);
    
      }
     
    
    
      hideComponent(name) {
    
        console.log(name);
    
        switch (name) {
          case "showHideDemo1":
            this.setState({ showHideDemo1: true,showHideDemo2:false,showHideDemo3:false,showHideDemo4:false,showHideDemo5:false});
            break;
          case "showHideDemo2":
            this.setState({ showHideDemo1: false,showHideDemo2:true,showHideDemo3:false,showHideDemo4:false,showHideDemo5:false });
            break;
          case "showHideDemo3":
            this.setState({ showHideDemo1: false,showHideDemo2:false,showHideDemo3:true,showHideDemo4:false,showHideDemo5:false, });
            break;
            case "showHideDemo4":
            this.setState({ showHideDemo1: false,showHideDemo2:false,showHideDemo3:false,showHideDemo4:true,showHideDemo5:false, });
            break;     
    
        }
    
      }
    
    
      render() {
    
        const { showHideDemo1, showHideDemo2, showHideDemo3,showHideDemo4 } = this.state;

  return (
   <>
   <div>
    <Topbar/>
    </div>
    <div>
        <Navbar/>
        <br />
    </div>
    
    <div className="Custom-body">
        <div className="cardcustom">
            <div className="sidenav">
      <div className="navbarsizing">
      <List>
        {['Manage Profile'].map((text, index) => (
          <ListItem button key={text} onClick={() => this.hideComponent("showHideDemo1")}>
            <ListItemIcon>
              {index % 2 === 0 ? <UserOutlined /> :  <UserOutlined />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {['Change Password'].map((text, index) => (
            <ListItem key={text} onClick={() =>  this.hideComponent("showHideDemo2")}>
            <ListItemIcon>
              {index % 2 === 0 ?<LockOutlined />:<LockOutlined />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {['My wishlist'].map((text, index) => (
            <ListItem key={text} onClick={() => this.hideComponent("showHideDemo3")}>
            <ListItemIcon>
              {index % 2 === 0 ? <HeartOutlined />:<HeartOutlined />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {['My Cart'].map((text, index) => (
            <ListItem key={text} onClick={() => this.hideComponent("showHideDemo4")}>
            <ListItemIcon>
              {index % 2 === 0 ? <ShoppingCartOutlined /> : <ShoppingCartOutlined />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
       
        
      </List>
      
      
      </div>
      <Divider />
      <div className="componentarea">
          <div>
              {showHideDemo1 && <Demo1/>}
              {showHideDemo2 && <Demo2 />}
        {showHideDemo3 && <Wishlist />}
        {showHideDemo4 && <Cart/>}
       

          </div>
      </div>
    </div>
        </div>
        </div>
        <br />
        <br />
        <br />   
    
   </> 
  );
        
        }    
};

export default Customer;