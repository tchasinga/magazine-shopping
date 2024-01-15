import {SiShopify,  } from 'react-icons/si';
import { PiShoppingCartLight } from "react-icons/pi";
import '../../index.css'

export default function Navbars() {
  return (
    <div>
        <div className="flex items-center justify-between">

           <div className="flex  gap-2 items-center">
            <SiShopify className='text-4xl'/>
            <h1 className="text-2xl text-center pt-3 font-bold text-slate-900">Shopify</h1>
           </div>

           <ul className="nav-menu flex items-center gap-3 text-slate-800 text-[15px]">
            <li className="">Shop <hr /></li>
            <li className="">Mens</li>
            <li className="">Womens</li>
            <li className="">Child</li>
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
