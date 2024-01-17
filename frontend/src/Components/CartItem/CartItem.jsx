import { useContext } from "react";
import { ShopContext } from "../../Contexts/ShopContext";
import { MdDelete } from "react-icons/md";
import { Tooltip } from "@mui/material";
import PropTypes from 'prop-types';

export default function CartItem() {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((item) => {
        if (cartItems[item] > 0) {
          return (
            <div className="cartitems-format" key={item}>
              <div className="cartitems-format-img">
                <img src={all_product[item].image} alt="" />
              </div>
              <div className="cartitems-format-title">
                <p>{all_product[item].name}</p>
              </div>
              <div className="cartitems-format-price">
                <p>${all_product[item].new_price}</p>
              </div>
              <div className="cartitems-format-quantity">
                <p>{cartItems[item]}</p>
              </div>
              <div className="cartitems-format-total">
                <p>${all_product[item].new_price * cartItems[item]}</p>
              </div>
              <div className="cartitems-format-remove">
                <Tooltip title="Remove">
                  <MdDelete
                    className="cartitems-format-remove-icon"
                    onClick={() => removeFromCart(item)}
                  />
                </Tooltip>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

CartItem.propTypes = {
  all_product: PropTypes.object.isRequired, // Adjusted PropTypes for all_product
};
