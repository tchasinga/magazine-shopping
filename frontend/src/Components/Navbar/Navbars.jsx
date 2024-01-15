import {SiShopify,  } from 'react-icons/si';
import { MdAddShoppingCart } from "react-icons/md";
import '../../index.css'

export default function Navbars() {
  return (
    <div>
        <div className="">

           <div className="flex  gap-2 items-center">
            <SiShopify className='text-4xl'/>
            <h1 className="text-2xl text-center pt-3 font-bold text-slate-900">Shopify</h1>
           </div>

           <ul className="">
            <li className="">Shop</li>
            <li className="">Mens</li>
            <li className="">Womens</li>
            <li className="">Child</li>
           </ul>

           <div className="">
              <MdAddShoppingCart />
              <button>Loging</button>
           </div>
           
        </div>
    </div>
  )
}
