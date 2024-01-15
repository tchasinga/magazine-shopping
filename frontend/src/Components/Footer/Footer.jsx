import {SiGithub , SiShopify , SiLinkedin , SiInstagram , } from 'react-icons/si';
import '../../index.css'

export default function Footer() {
  return (
    <div className=''>
       <div className="flex justify-between px-56 items-center mgenBg fixed mt-10 bottom-0 right-0  left-0 text-white py-5">
            <div className="flex gap-5 items-center text-black">
                <SiShopify className="text-4xl"/>
                <h1 className="text-xl ">Shopify</h1>
            </div>
            <div className="flex gap-5 text-gray-800">
                <p className=''>@Copyright 2024 all deserved made by tchasinga balolebwami </p>
            </div>
            <div className="flex gap-5 text-black items-center">
                <SiGithub className="text-xl"/>
                <SiLinkedin className="text-xl"/>
                <SiInstagram className="text-xl"/>
            </div>
        </div>
    </div>
  )
}
