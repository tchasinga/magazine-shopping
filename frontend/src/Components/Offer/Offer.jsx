import exclusive from '../../img/AppleAirPods.png'


export default function Offer() {
  return (
    <div className='flex items-center justify-between'>
      <div className="">
        <h1 className='text-3xl'>Exclusive</h1>
        <p className='font-medium text-lg pt-3'>Get 30% Off On First Order</p>
        <h2 className='text-sm pb-5'>We get an offer for You here come and pick your goods</h2>
       
       <div className="bg-slate-100 py-2 px-5 w-32 rounded-r-3xl border">
       <button className='text-sm font-medium'>Shop Now</button>
       </div>
      </div>

      <div className="">
        <img src={exclusive} alt="" className='airpod'/>
      </div>
    </div>
  )
}
