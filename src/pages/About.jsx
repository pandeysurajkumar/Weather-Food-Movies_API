function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          About This Project
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          This multi-feature dashboard is a modern React application that
          demonstrates dynamic API integration, routing, and responsive UI
          development using Tailwind CSS.
        </p>
      </div>

      {/* Project Overview */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            🚀 Project Objective
          </h2>
          <p className="text-gray-600">
            The goal of this project is to build a Single Page Application (SPA)
            that integrates multiple live APIs into one seamless user experience.
            It showcases real-world frontend development concepts such as routing,
            dynamic rendering, state management, and API handling.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            🛠 Technologies Used
          </h2>
          <ul className="text-gray-600 space-y-2">
            <li>✔ React.js (Component-based architecture)</li>
            <li>✔ React Router (SPA navigation)</li>
            <li>✔ Tailwind CSS (Modern styling)</li>
            <li>✔ OpenWeather API</li>
            <li>✔ Fake Store API</li>
            <li>✔ TheMealDB API</li>
          </ul>
        </div>

      </div>

      {/* Features Section */}
      <div className="max-w-5xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          🌟 Key Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-indigo-600 mb-2">
              Dynamic API Integration
            </h3>
            <p className="text-gray-600 text-sm">
              Fetches real-time data from multiple live APIs and renders it dynamically.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-green-600 mb-2">
              Single Page Application
            </h3>
            <p className="text-gray-600 text-sm">
              Seamless navigation between pages without page reload using React Router.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-cyan-600 mb-2">
              Responsive UI
            </h3>
            <p className="text-gray-600 text-sm">
              Built with Tailwind CSS ensuring clean, modern, and mobile-friendly design.
            </p>
          </div>

        </div>
      </div>

      {/* Footer Section */}
      <div className="text-center mt-16 text-gray-500">
        <p>
          Developed with dedication to demonstrate practical React development skills.
        </p>
      </div>

    </div>
  );
}

export default About;
