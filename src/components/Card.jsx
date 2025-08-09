import React from "react";

const Card = ({pokemon}) => {
  return (
    <div className="max-w-xs w-full backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden border border-gray-600">
      {/* Image Section */}
      <img
        className="w-full h-48 object-contain"
        src={`${pokemon.sprites.other.dream_world.front_default}`}
        alt="Card"
      />

      {/* Text Section */}
      <div className="p-5">
        <div className="grid grid-cols-2 gap-4 text-center">
          {/* Text Pair 1 */}
          <div>
            <p className="font-bold text-lg text-gray-200">{pokemon.name}</p>
            <p className="text-sm text-gray-400 font-bold">Name</p>
          </div>

          {/* Text Pair 2 */}
          <div>
            <p className="font-bold text-lg text-gray-200">{pokemon.height}</p>
            <p className="text-sm text-gray-400 font-bold">Height</p>
          </div>

          {/* Text Pair 3 */}
          <div>
            <p className="font-bold text-lg text-gray-200">{pokemon.weight}</p>
            <p className="text-sm text-gray-400 font-bold">Weight</p>
          </div>

          {/* Text Pair 4 */}
          <div>
            <p className="font-bold text-lg text-gray-200">{pokemon.stats[5].base_stat}</p>
            <p className="text-sm text-gray-400 font-bold">Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
