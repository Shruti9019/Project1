const NewsLetter = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Never Miss a Deal!</h2>
        <p className="text-gray-500 mt-4 mb-10 text-lg">
          Subscribe to get the latest offers, new arrivals, and exclusive discounts
        </p>
        <form className="flex justify-center max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email id"
            className="flex-1 px-6 py-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-green-500 text-white font-semibold rounded-r-md hover:bg-green-600 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    );
  };
  
  export default NewsLetter;
  