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
            <p className="font-bold text-lg text-gray-200">2,500</p>
            <p className="text-sm text-gray-400">Followers</p>
          </div>

          {/* Text Pair 2 */}
          <div>
            <p className="font-bold text-lg text-gray-200">500</p>
            <p className="text-sm text-gray-400">Following</p>
          </div>

          {/* Text Pair 3 */}
          <div>
            <p className="font-bold text-lg text-gray-200">120</p>
            <p className="text-sm text-gray-400">Posts</p>
          </div>

          {/* Text Pair 4 */}
          <div>
            <p className="font-bold text-lg text-gray-200">8</p>
            <p className="text-sm text-gray-400">Years</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
