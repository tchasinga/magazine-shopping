import data_product from "../Assets/data"
import Items from "../Item/Items"


export default function Related() {
  return (
    <div>  
        <div className="related">
            <h1 className="text-4xl mt-20 font-bold text-slate-950">Related Products </h1>
            <hr  className="mt-2 w-32"/>
            <div className="mygridreponsive mt-10 mb-20">
            {data_product.map((items , i) => (
          <Items
            key={i}
            id={items.id}
            image={items.image}
            name={items.name}
            new_price={items.new_price}
            old_price={items.old_price}
          />
        ))}
            </div>
        </div>    
    </div>
  )
}
