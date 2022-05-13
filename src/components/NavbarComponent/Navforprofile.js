import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import '../NavbarComponent/Navbar.css';
import axios from "axios";
import {Link} from "react-router-dom";
import { Menu, Dropdown, Space } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';




function NavProf() {
   
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        getCategories();
    },[]);
    function getCategories(){
        axios.get('http://localhost/Eshop/Api/categories/category.php').then(function(response){
        console.log(response.data);
        setCategories(response.data);
       
    });
}
   
    let navigate = useNavigate();
    const handleHome = () => {
        navigate("../../home")
    }
    
    let category= (categories.map((categ,key)=>
     
    <a>{categ.categoryName}</a>
    
    ));
    return (
        <>
            <div className="horizontal-navbar">
                <a type="submit" onClick={handleHome}>Home</a>
              
                
               <Dropdown  
               overlay={(
                   <Menu>
                       {categories.map((category,key)=>
                   <Menu.Item >
                 <Link to={`../../category/${category.categoryId}`}>{category.categoryName} </Link>
                   </Menu.Item>
                       )}
               </Menu> 
    )} >
                   <a onClick={e=>e.preventDefault()}>
                       <Space>
                           Categories
                           <DownOutlined />
                       </Space>
                   </a>
               </Dropdown>     
               
            </div>
        </>
    )
};
export default NavProf;