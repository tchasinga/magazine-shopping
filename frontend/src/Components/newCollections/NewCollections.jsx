import new_collections from "../Assets/new_collections";
import Items from "../Item/Items";

export default function NewCollections() {
  return (
    <div>
      <div className="w-full text-slate-900  font-semibold my-5">
        <h1 className="uppercase text-2xl">
          the most recently added collection....
        </h1>
        <p className="text-gray-500 text-xs flex items-center">
          +1Millio viewer this month
        </p>
      </div>

      <div className="mygridreponsive">
        {new_collections.map((items, i) => (
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
  );
}
