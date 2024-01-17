import { useContext } from "react"
import { ShopContext } from "../../Contexts/ShopContext"


export default function CartItem() {

    const {all_product , cartItems  , removeFromCart  } = useContext(ShopContext)

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

        <div className="">
            <div className="cartitems-format">
            <img src="" alt="" className="carticon-product-icon"/>
            </div>
        </div>
    </div>
  )
}
