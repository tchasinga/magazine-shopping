import { useContext } from "react";
import { ShopContext } from "../../Contexts/ShopContext";
import { MdDelete } from "react-icons/md";
import { Tooltip } from "@mui/material";

export default function CartItem() {
  const {all_product, cartItems, removeFromCart } = useContext(ShopContext);

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

      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div className="" key={e.id}>
              <div className="cartitems-format">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                <p>{e.new_price * cartItems[e.id]}</p>

                <Tooltip title="click here to edit your profile" arrow placement="left">
                  <div>
                    <MdDelete className="cartitems-delete-icon" onClick={() => removeFromCart(e.id)} />
                  </div>
                </Tooltip>
              </div>
              <hr />
            </div>
          );
        }
        return null; // added to satisfy React's requirement for a return value in map
      })}
    </div>
  );
}
