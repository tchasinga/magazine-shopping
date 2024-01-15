import {SiShopify,  } from 'react-icons/si';
import { PiShoppingCartLight } from "react-icons/pi";
import '../../index.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbars() {

    const [menu, setmenu] = useState("Shop")

  return (
    <div>
        <div className="flex items-center justify-between">

           <div className="flex  gap-2 items-center">
            <SiShopify className='text-4xl'/>
            <h1 className="text-2xl text-center pt-3 font-bold text-slate-900">Shopify</h1>
           </div>

           <ul className="nav-menu flex items-center gap-3 text-slate-800 text-[15px] duration-500">
            <li onClick={()=> setmenu("Shop")} className=""><Link to={'/'}>Shop</Link> {menu ===  "Shop" ?  <hr /> : <></>}</li>
            <li onClick={()=> setmenu("Mens")} className=""><Link to={'/mens'}>Mens</Link> {menu ===  "Mens" ?  <hr /> : <></>}</li>
            <li onClick={()=> setmenu("Womens")} className=""><Link to={'/womens'}>Womens</Link> {menu ===  "Womens" ?  <hr /> : <></>}</li>
            <li onClick={()=> setmenu("Child")} className=""><Link to={'/child'}>Child</Link> {menu ===  "Child" ?  <hr /> : <></>}</li>
           </ul>

           <div className="relative flex items-center gap-3">
              <PiShoppingCartLight className='text-2xl font-bold'/>
              <div className="nav-cart-count">0</div>
              <button>Loging</button>
           </div>

        </div>
    </div>
  )
}
