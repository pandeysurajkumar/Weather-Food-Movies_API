import { useEffect, useState } from "react";

function Food() {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("Chicken");

  const getMeals = (query) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then(res => res.json())
    //   .then(data=>{console.log(data)
    //   });
      .then(data => {
        if (data.meals) {
          setMeals(data.meals);
        } else {
          setMeals([]);
        }
      });
  };

  // ✅ Load initially
  useEffect(() => {
    getMeals("Chicken");
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      {/* 🔍 Search Section */}
      <div className="flex gap-4 mb-6 justify-center">
        <input
          type="text"
          placeholder="Search Food..."
          className="p-2 border rounded w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={() => getMeals(search)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Search
        </button>
      </div>

      <h2 className="text-2xl mb-6 text-gray-600 text-center font-bold">
        Recipe List
      </h2>

      {/* 🍔 Food Grid */}
      <div className="grid grid-cols-4 gap-6">
        {meals.map((item) => (
          <div
            key={item.idMeal}
            className="bg-white shadow rounded overflow-hidden hover:scale-105 transition"
          >
            <img
              src={item.strMealThumb}
              alt={item.strMeal}
              className="h-48 w-full object-cover"
            />
            <div className="bg-green-500 text-white text-center py-2">
              {item.strMeal}
            </div>
            <p className="text-center py-2 font-semibold">
              Category: {item.strCategory}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Food;
