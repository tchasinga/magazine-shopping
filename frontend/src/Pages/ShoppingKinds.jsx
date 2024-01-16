import { useContext } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../Contexts/ShopContext.jsx";
import Items from "../Components/Item/Items.jsx";

const ShoppingKinds = (props) => {
  const { all_product }  = useContext(ShopContext);
  console.log('props.category:', props.category);
  console.log('all_product:', all_product);
  
  return (
    <div className="">
      <div className="pt-3">
        <img src={props.banner} alt="banner" className="w-full object-fill" />
      </div>

      <div className="mygridreponsive">
        {all_product.map((items ,i) => {
          if (props.category === items.category || items.category === props.category || items.category && props.category) {
            return (
              <Items
                key={i}
                id={items.id}
                name={items.name}
                price={items.price}
                image={items.image}
              />
            );
          }
        })}
        
      </div>
    </div>
  );
};

ShoppingKinds.propTypes = {
  banner: PropTypes.node.isRequired,
  category: PropTypes.string.isRequired, // Add this line for 'category' prop validation
};

export default ShoppingKinds;
