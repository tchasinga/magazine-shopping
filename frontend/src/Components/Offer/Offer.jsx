import exclusive from '../../img/AppleAirPods.png'


export default function Offer() {
  return (
    <div>
      <div className="">
        <h1>Exclusive</h1>
        <h2>Offer For You</h2>
        <p>Get 30% Off On First Order</p>
        <button>Shop Now</button>
      </div>

      <div className="">
        <img src={exclusive} alt="" />
      </div>
    </div>
  )
}
