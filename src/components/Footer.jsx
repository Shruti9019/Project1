import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="bg-green-100 py-6 mt-10"> {/* Reduced padding here */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 text-gray-700">
  
        {/* About GreenCart */}
        <div>
          <div className="flex items-center mb-4">
            <img
              src={assets.logo}
              alt="arrow"
              className="hidden md:block group-hover:translate-x-1 transition-transform"
            />
          </div>
          <p>We deliver fresh groceries and snacks straight to your door. Trusted by thousands, we aim to make your shopping experience simple and affordable.</p>
        </div>
  
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-600">Home</a></li>
            <li><a href="#" className="hover:text-green-600">Best Sellers</a></li>
            <li><a href="#" className="hover:text-green-600">Offers & Deals</a></li>
            <li><a href="#" className="hover:text-green-600">Contact Us</a></li>
            <li><a href="#" className="hover:text-green-600">FAQs</a></li>
          </ul>
        </div>
  
        {/* Need Help */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Need help?</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-600">Delivery Info</a></li>
            <li><a href="#" className="hover:text-green-600">Return & Refunds</a></li>
            <li><a href="#" className="hover:text-green-600">Payment Methods</a></li>
            <li><a href="#" className="hover:text-green-600">Track your Order</a></li>
            <li><a href="#" className="hover:text-green-600">Contact Us</a></li>
          </ul>
        </div>
  
      </div>
  
      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-6 border-t pt-4"> {/* Reduced margin here */}
        Copyright 2025 © GreatStack.dev All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
