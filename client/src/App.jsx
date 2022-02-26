import React from "react";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Product from "./Pages/Product";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import { BrowserRouter as Router, Routes, Navigate, Route } from "react-router-dom";
import Payment from "./payment";
import Success from "./Pages/success";


const App = () => {
  const user= false
 
  return (
    <Router>
      <Routes>
        <Route path="/payment" element={<Payment/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="/products/:category" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={user ? <Navigate to="/" /> :<Login/>}/>
        <Route path="/register" element={ user ? <Navigate to="/" /> : <Register/>}/>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );

};

export default App;