function Home() {
  return (
    <div className="min-h-screen bg-linear-to-r from-indigo-100 to-blue-100">

      {/* Hero Section */}
      <div className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to Multi-Feature React Dashboard
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          A dynamic web application built with React, Tailwind CSS, and live APIs.
          Explore real-time weather updates, discover trending products,
          and search delicious recipes — all in one seamless platform.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-10 px-10 pb-20">

        {/* Movies / Products */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            🎬 Movies / Products Page
          </h2>
          <p className="text-gray-600 mb-4">
            Browse a collection of products fetched dynamically from a live API.
            Each item is displayed in responsive cards with images, titles,
            and prices. Includes search functionality for better user experience.
          </p>
          <ul className="text-gray-500 text-sm space-y-2">
            <li>✔ Dynamic API Integration</li>
            <li>✔ Responsive Grid Layout</li>
            <li>✔ Real-time Search & Filtering</li>
            <li>✔ Modern Card UI Design</li>
          </ul>
        </div>

        {/* Recipe Page */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            🍲 Food Recipe Page
          </h2>
          <p className="text-gray-600 mb-4">
            Discover delicious recipes from around the world. Search meals by
            name and explore ingredients, cooking instructions, and images —
            all powered by TheMealDB API.
          </p>
          <ul className="text-gray-500 text-sm space-y-2">
            <li>✔ Recipe Search Functionality</li>
            <li>✔ Ingredients & Instructions</li>
            <li>✔ Clean & Organized Layout</li>
            <li>✔ Dynamic Data Rendering</li>
          </ul>
        </div>

        {/* Weather Page */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
            🌤 Weather Forecast Page
          </h2>
          <p className="text-gray-600 mb-4">
            Get real-time weather updates for any city worldwide. View
            temperature, humidity, weather conditions, and icons —
            powered by OpenWeather API.
          </p>
          <ul className="text-gray-500 text-sm space-y-2">
            <li>✔ Live Weather API</li>
            <li>✔ Temperature & Humidity</li>
            <li>✔ Weather Icons</li>
            <li>✔ Elegant Gradient UI</li>
          </ul>
        </div>

      </div>

      {/* Footer */}
      <div className="text-center py-6 bg-indigo-600 text-white">
        Built with ❤️ using React, Tailwind CSS & Live APIs
      </div>

    </div>
  );
}

export default Home;
