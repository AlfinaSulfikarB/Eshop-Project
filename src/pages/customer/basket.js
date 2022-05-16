import React,{useState,useEffect}from "react";
import { Header, Main, Item } from '../../assets/styles/styles';
import'../../assets/styles/style.css';
import axios from "axios";
import { message,Card} from "antd";
import { Navigate, useNavigate } from "react-router-dom";
const Basket=()=>{
    const [items, setItems] = useState();
   
    let navigate=useNavigate();
      
        useEffect(() => {
          getCustomer();
          
        }, []);
        
        function getCustomer() {
          let navid= localStorage.getItem('customerId');
              console.log(navid);
          axios
            .get(`http://localhost/Eshop/Api/cart.php?custId=${navid}`)
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
          .delete(`http://localhost/Eshop/Api/cart-delete.php?id=${id}&cust=${navid}`)
          .then(function(response){
            console.log(response.data);
            message.success("Product Removed");
            setItems(response.data);
          });
          getCustomer();
         
        }
        const handleproceed=()=>{
            navigate('../home');
        }

    return(
        <>
         <Main>
         <h3>Your Cart!</h3>
         
       {items && items.length > 0
          ? <section>
              
              {items.map((i, k) => <Item key={`Item-${k}`}>
             
                  <dl>
                    <dt>...</dt>
                    <dd  onClick={()=>handleDelete(i.productCartId)}>Delete</dd>
                  </dl>
                  <span>₹{i.price}</span>
                  <img alt={i.productName} src={require(`../../assets/images/products/${i.fileName}`)} /> 
                  <h3>{i.productName}</h3>
                 
                  
                  
              </Item>)}
          
              <a className="atag" style={{alignSelf:"end"}} target="_blank" rel="noopener noreferrer" onClick={handleproceed}>Proceed to Purchase</a>
              
            </section> 
          : <section><p>No items yet<br/><span>Start By Adding An Item</span></p></section>}
   </Main>
   
        </>
    )
}
export default Basket;