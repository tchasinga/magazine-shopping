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
        return updatedCart;
      });
    };
  
    const removeFromCart = (itemId) => {
      setCartItems((prev) => {
        const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };
        return updatedCart;
      });
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
    
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
    
        return totalAmount;
    }
    
    // implementing the the displaying quatinty of element booked 
    const getTotalCartItem =() =>{
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }
  
    const contextValue = { all_product, cartItems, removeFromCart, addToCart, getTotalCartAmount , getTotalCartItem};
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
