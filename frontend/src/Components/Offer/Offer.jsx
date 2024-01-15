import exclusive from '../../img/AppleAirPods.png'


export default function Offer() {
  return (
    <div>
      <div className="">
        <h1 className='text-3xl'>Exclusive</h1>
        <p className='font-medium text-lg'>Get 30% Off On First Order</p>
        <h2 className='text-lg'>We get an offer for You here come and pick your goods</h2>
       
       <div className="">
       <button>Shop Now</button>
       </div>
      </div>

      <div className="">
        <img src={exclusive} alt="" />
      </div>
    </div>
  )
}
