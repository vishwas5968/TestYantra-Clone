import React from "react";
import Top from "./Top";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Global.css";
import Footer from "./components/Footers/Footer";
import Products from "./components/prod/Products";
import About from "./components/Abouts/About";
import Article from "./components/Articles/Article";
import Services from "./components/Services/Services";
import Industries from "./components/Industries/Industries";

const App = () => {
  return (
    <div>
      <Top />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Products" element={<Products />}></Route>
          <Route path="/Industries" element={<Industries/>}></Route>
          <Route path="/Articles" element={<Article />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </Router>
      {/* <Products/> */}
      {/* <Home/> */}
      <Footer />
    </div>
  );
};

export default App;
