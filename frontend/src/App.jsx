import Navbars from "./Components/Navbar/Navbars";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from "./Pages/Shop";
import ShoppingKinds from "./Pages/ShoppingKinds";
import Products from "./Pages/Products";

function App() {

  return (
    <div className="max-w-6xl mx-auto p-4">
      <BrowserRouter>
      <Navbars />
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/mens" element={<ShoppingKinds category="mens"/>} />
        <Route path="/womens" element={<ShoppingKinds category="womens"/>} />
        <Route path="/child" element={<ShoppingKinds category="child"/>} />

        <Route path="/product" element={<Products/>}>
          
        </Route>

       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
