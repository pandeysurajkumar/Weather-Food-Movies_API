import { useState, useEffect } from "react";

function Sports() {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("Messi");

  const getPlayers = (query) => {
    fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${query}`)
      .then(res => res.json())
      .then(data => {
        if (data.player) {
          setPlayers(data.player);
        } else {
          setPlayers([]);
        }
      });
  };

  useEffect(() => {
    getPlayers("Messi");
  }, []);

  return (
    <div className="min-h-screen bg-green-100 p-4 sm:p-8">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center bg-green-300 p-4 rounded-2xl mb-8">
        <h1 className="text-4xl font-bold text-gray-800">SPORTS HUB</h1>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search Player..."
            className="p-2 border rounded w-full sm:w-64 text-black font-bold"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            onClick={() => getPlayers(search)}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Search
          </button>
        </div>
      </div>

      <h2 className="text-2xl mb-6 text-black">
        Explore Your Favorite Players
      </h2>

      {/* Player Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {players.map((item) => (
          <div
            key={item.idPlayer}
            className="bg-white shadow rounded overflow-hidden hover:scale-105 transition"
          >
            <img
              src={item.strThumb}
              alt={item.strPlayer}
              className="h-48 w-full object-contain p-4"
            />

            <div className="bg-green-600 text-white text-center py-2">
              {item.strPlayer}
            </div>

            <p className="text-center py-1 font-semibold">
              Team: {item.strTeam}
            </p>

            <p className="text-center py-1">
              Sport: {item.strSport}
            </p>

            <p className="text-center py-1">
              Position: {item.strPosition}
            </p>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Sports;