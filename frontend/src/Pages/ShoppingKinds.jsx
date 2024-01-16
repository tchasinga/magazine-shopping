import { useContext } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../Contexts/ShopContext.jsx";
import Items from "../Components/Item/Items.jsx";

const ShoppingKinds = (props) => {
  const { all_product }  = useContext(ShopContext);
 
  return (
    <div className="">
      <div className="pt-3">
        <img src={props.banner} alt="banner" className="w-full object-fill" />
      </div>

      <div className="mygridreponsive pt-5 pb-16">
        {all_product.map((items ,i) => {
          if ( items.category === props.category) {
            return (
              <Items
              key={i}
              image={items.image}
              name={items.name}
              new_price={items.new_price}
              old_price={items.old_price}
            />
            );
          } else{
            return null;
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
