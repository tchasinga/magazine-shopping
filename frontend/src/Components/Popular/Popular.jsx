import data_product from "../Assets/data";
import Items from "../Item/Items";

export default function Popular() {
  return (
    <div>
      <div className="w-full text-slate-900 text-3xl font-semibold my-5">
        <h1 className="uppercase">the most POPULAR IN WOMEN outfit...</h1>
        <p className="text-gray-500 text-xs flex items-center">900k+ viewer this month</p>
      </div>

      <div className="mygridreponsive ">
        {data_product.map((items) => (
          <Items
            key={items.id}
            image={items.image}
            name={items.name}
            new_price={items.new_price}
            old_price={items.old_price}
          />
        ))}
      </div>
    </div>
  );
}
