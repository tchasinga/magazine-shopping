import { useContext } from "react";
import { ShopContext } from "../../Contexts/ShopContext.jsx";
import { MdOutlineTextDecrease } from "react-icons/md";
import { Tooltip } from "@mui/material";

export default function CartItem() {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);
  console.log(all_product);
    console.log(cartItems);

  return (
    <div className="cartitems pb-32">
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
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>{e.new_price * cartItems[e.id]}</p>

                <Tooltip
                  title="click here to edit your price"
                  arrow
                  placement="left"
                >
                  <div>
                    <MdOutlineTextDecrease
                      className="cartitems-delete-icon"
                      onClick={() => {
                        removeFromCart(e.id);
                      }}
                    />
                  </div>
                </Tooltip>
                <hr />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
