import Navbars from "./Components/Navbar/Navbars";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from "./Pages/Shop";

function App() {

  return (
    <div className="max-w-6xl mx-auto p-4">
      <BrowserRouter>
      <Navbars />
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/mens" element={<Shop/>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
