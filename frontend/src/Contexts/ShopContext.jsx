import PropTypes from "prop-types";
import { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};


const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
  
    const addToCart = (itemId) => {
      setCartItems((prev) => {
        const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
        console.log(updatedCart);
        return updatedCart;
      });
    };
  
    const removeFromCart = (itemId) => {
      setCartItems((prev) => {
        const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };
        console.log(updatedCart);
        return updatedCart;
      });
    };
  
    const contextValue = { all_product, cartItems, removeFromCart, addToCart };
    return (
      <ShopContext.Provider value={contextValue}>
        {props.children}
      </ShopContext.Provider>
    );
  };
  
ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopContextProvider;
