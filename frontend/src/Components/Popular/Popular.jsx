import data_product from "../Assets/data";
import Items from "../Item/Items";

export default function Popular() {
  return (
    <div>
      <div className="">
        <h1>POPULAR IN WOMEN</h1>
      </div>

      <div className="">
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
