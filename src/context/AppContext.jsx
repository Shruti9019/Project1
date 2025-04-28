import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { dummyProducts } from "../assets/assets"; 

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(true);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const currency = "$";
  const products = dummyProducts; 

  const addToCart = (itemID) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemID]) {
      cartData[itemID] += 1;
    } else {
      cartData[itemID] = 1;
    }
    setCartItems(cartData);
    toast.success("Added to cart");
  };

  const updateCartItem = (itemID, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemID] = quantity;
    setCartItems(cartData);
    toast.success("Updated cart item quantity");
  };

  const removeFromCart = (itemID) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemID]) {
      cartData[itemID] -= 1;
      if (cartData[itemID] === 0) {
        delete cartData[itemID];
      }
    }
    toast.success("Removed item from cart");
    setCartItems(cartData);
  };

  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    products, 
    currency, 
    cartItems,
    addToCart,
    updateCartItem,
    removeFromCart, 
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};