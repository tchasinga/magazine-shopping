import Navbars from "./Components/Navbar/Navbars";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from "./Pages/Shop";
import ShoppingKinds from "./Pages/ShoppingKinds";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import child_banner from "./Components/Assets/banner_kids.png";

function App() {

  return (
    <div className="max-w-6xl mx-auto p-4">
      <BrowserRouter>
      <Navbars />
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/mens" element={<ShoppingKinds banner={men_banner} category="men"/>} />
        <Route path="/womens" element={<ShoppingKinds banner={women_banner} category="women"/>} />
        <Route path="/child" element={<ShoppingKinds banner={child_banner} category="kid"/>} />

        <Route path="/product" element={<Products />}>
  <Route path="/product/:productId" element={<Products />} />
</Route>


        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<LoginSignup/>} />

       </Routes>
        <Footer  />
      </BrowserRouter>
    </div>
  )
}

export default App
