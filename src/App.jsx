import React from 'react';

function App() {
  // Background image URL
  const backgroundImageUrl = 'https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/tcg/sun-moon-cosmic-eclipse-01.jpg';

  return (
    <div
      className="relative min-h-screen bg-cover bg-center font-sans"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center w-full pt-4 px-4">
        
        {/* Search Bar Container */}
        <div className="w-full max-w-lg">
          <div className="relative">
            
            {/* Search Icon */}
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg 
                className="h-6 w-6 text-gray-300" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </div>

            {/* Input Field */}
            <input
              type="text"
              placeholder="Search for a Pokémon..."
              className="w-full p-4 pl-12 text-lg text-white bg-gray-900 bg-opacity-70 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
