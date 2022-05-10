import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import "antd/dist/antd.css";
import Login from './pages/Login';
import Home from './pages/homepage';
import Customer from './pages/customer/Customer';
import Wish from './pages/wishlists';
import Cart from './pages/cart';
import Product from "./pages/product";
import Category from "./pages/category";
import UpdateProfile from "./pages/customer/updateprofile";
import PageNot from "./components/pagenot";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
        <Route path="home" element={<Home />}/>
        <Route path="customer/:id" element={<ProtectedRoute />}>
          <Route exact path="/customer/:id" element={<Customer/>}/>
          </Route>
        <Route path="wishlist" element={<Wish />}/>
        <Route path="cart" element={<Cart />}/>
        <Route path="product/:id" element={<Product />}/>
        <Route path="category/:id" element={<Category />}/>
        <Route path="updateprofile/:id" element={<UpdateProfile />}/> 
        <Route path="/*" element={<PageNot />} />
        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
