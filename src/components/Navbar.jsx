import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { useAppContext } from "../context/AppContext"; // Assuming useAppContext is your context hook
import { assets } from "../assets/assets"; // Assuming assets folder contains the images
import Login from './Login';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const { cartItems } = useAppContext(); // Get cartItems from AppContext

  // Calculate the total number of items in the cart
  const totalCartItems = Object.values(cartItems).reduce((acc, count) => acc + count, 0);

  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b-2 border-green-100 shadow-sm bg-white relative">
      <div className="flex items-center gap-2">
        <img src={assets.logo} alt="GreenCart Logo" className="h-10" />
      </div>

      <div className="flex items-center gap-6 text-gray-600 font-medium ml-auto">
        <Link to="/" className="hover:text-green-600 transition">Home</Link>
        <Link to="/AllProducts" className="hover:text-green-600 transition">All Product</Link>
        <button className="hover:text-green-600 transition">Contact</button>

        <div className="flex items-center border px-3 py-2 rounded-full bg-gray-50">
          <input
            type="text"
            placeholder="Search products"
            className="bg-transparent outline-none text-sm px-2"
          />
          <img src={assets.search_icon} alt="Search" className="h-5 ml-5" />
        </div>

        {/* Cart Image with item count */}
        <div className="relative">
          <Link to="/cart">
            <img src={assets.cart_icon} alt="Cart" className="h-7" />
            {totalCartItems > 0 && (
              <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                {totalCartItems}
              </div>
            )}
          </Link>
        </div>

        <button
          onClick={() => setShowLogin(true)}
          className="bg-green-500 hover:bg-green-600 text-white px-10 py-2 rounded-full text-sm font-medium transition"
        >
          Login
        </button>
      </div>

      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="relative">
            <Login />
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-2 right-2 bg-green-300 hover:bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center"
            >
              X
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
