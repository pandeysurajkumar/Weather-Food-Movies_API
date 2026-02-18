import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-linear-to-r from-indigo-100 to-blue-100 py-16 px-6">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Contact Me
        </h1>
        <p className="text-gray-600">
          Have questions or feedback? Feel free to reach out!
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-lg">

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </button>

        </form>

      </div>

      {/* Social Links */}
      <div className="text-center mt-12">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Connect With Me
        </h3>
        <div className="flex justify-center gap-6 text-indigo-600 text-lg">
          <a href="https://github.com/pandeysurajkumar" className="hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/suraj-pandey265/" className="hover:underline">LinkedIn</a>
        </div>
      </div>

    </div>
  );
}

export default Contact;
