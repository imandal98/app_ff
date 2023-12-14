// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Sections/Header/Header";
import Footer from "./Sections/Footer/Footer";
import Category from "./Sections/Category/Category";
import Product_info from "./Sections/Product_info/Product_info";
import Home from "./Sections/Home/Home";
import Appcontext from "./contex/contex";

function App() {
  return (
    <BrowserRouter>
      <Appcontext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product_info />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/success" element={<Home />} />
        </Routes>
        <Footer />
      </Appcontext>
    </BrowserRouter>
  );
}

export default App;
