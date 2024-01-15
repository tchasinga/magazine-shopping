import data_product from "../Assets/data"
import Items from "../Item/Items"


export default function Popular() {
  return (
    <div>
       <div className="">
        <h1>POPULAR IN WOMEN</h1>
       </div>

       <div className="">
        {data_product.map((item) =>(
            return <Items key={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
        ))}
       </div>
    </div>
  )
}
