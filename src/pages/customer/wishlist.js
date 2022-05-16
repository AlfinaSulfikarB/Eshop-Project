import React,{useState,useEffect}from "react";
import {  Main, Item } from '../../assets/styles/styles';
import axios from "axios";
import {message} from 'antd';
import { Navigate, useNavigate } from "react-router-dom";
const Wishlist=()=>{
    const [items, setItems] = useState();
    let navigate=useNavigate();
      
        useEffect(() => {
          getCustomer();
          
        }, []);
        
        function getCustomer() {
          let navid= localStorage.getItem('customerId');
          console.log(navid);
      axios
        .get(`http://localhost/Eshop/Api/wishlist.php?cust=${navid}`)
        .then(function (response) {
          console.log(response.data);
          setItems(response.data);
        });
          
        }

        const handleDelete=(id)=>{
          let navid= localStorage.getItem('customerId');
          console.log(navid);
          console.log(id);
          axios
          .delete(`http://localhost/Eshop/Api/wishlist-delete.php?id=${id}&cust=${navid}`)
          .then(function(response){
            console.log(response.data);
            message.success("Product Removed");
            setItems(response.data); 
            message.success(response.data);
                 
           
          });
          getCustomer();    
      
        }
let id=localStorage.getItem('token');
if(id){
    return(
        <>
         <Main>
         <h3>Your Wishlists!</h3>
       {items && items.length > 0
          ? <section>
               
              {items.map((i, k) => <Item key={`Item-${k}`}>
                  <dl>
                    <dt>...</dt>
                    <dd  onClick={()=>handleDelete(i.wishListId)}>Delete</dd>
                  </dl>
                  <span>₹{i.price}</span>
                  <img alt={i.productName} src={require(`../../assets/images/products/${i.fileName}`)} /> 
                  <h3>{i.productName}</h3>
                  {/* <a  target="_blank" rel="noopener noreferrer">Add to Cart</a> */}
              </Item>)}
            </section> 
          : <section><p>No items yet<br/><span>Start By Adding An Item</span></p></section>}
   </Main>
        </>
    )
       }else{
         return(
           <>
           <div class="wrapup">
<div class="box">
<p><a href="/">Please, login to add.</a></p>
</div>
</div>
           </>
         )
       }
}
export default Wishlist;