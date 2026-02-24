import { useState, useEffect } from "react";
import rainImg from "../assets/rain.jpg"
function Movies() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("Avengers");

  const getMovies = (query) => {
    fetch(`https://www.omdbapi.com/?s=${query}&apikey=9c7bbd6d`)
      .then(res => res.json())
      .then(data => {
        if (data.Search) {
          setProducts(data.Search);
        } else {
          setProducts([]);
        }
      });
  };

  // Load initially
  useEffect(() => {
    getMovies("Avengers");
  }, []);

  return (
    <div
      className="min-h-screen bg-gray-100 bg-cover bg-center p-4 sm:p-8"
      style={{ backgroundImage: `url(${rainImg})` }}
    >
      {/*Header */}
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center bg-blue-300 p-4 rounded-2xl mb-8">
        <h1 className="text-4xl font-bold text-gray-800">HOOKED</h1>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search Movie..."
            className="p-2 border rounded w-full sm:w-64 text-black font-bold"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            onClick={() => getMovies(search)}
            className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600"
          >
            Search
          </button>
        </div>
      </div>

      <h2 className="text-2xl mb-6 text-black">
        Sharing a few of my favorite movies.
      </h2>

      {/*Movie Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.imdbID}
            className="bg-white shadow rounded overflow-hidden hover:scale-105 transition"
          >
            <img
              src={item.Poster}
              alt={item.Title}
              className="h-48 w-full object-contain p-4"
            />
            <div className="bg-sky-500 text-white text-center py-2">
              {item.Title}
            </div>
            <p className="text-center py-2 font-semibold">
              Year: {item.Year}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Movies;
