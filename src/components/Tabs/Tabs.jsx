import React from 'react';

function Tabs({ labels }) {
  return (
    <div className="flex overflow-x-auto whitespace-nowrap">
      {labels.map((label, index) => (
        <button
          key={index}
          className={`inline-flex items-center h-12 px-2 py-2 text-center text-gray-700 bg-transparent border-b border-gray-300 sm:px-4 dark:border-gray-500 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none ${
            index === 0 ? 'rounded-t-md' : ''
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 mx-1 sm:w-6 sm:h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {/* Coloca aquí el código SVG correspondiente */}
          </svg>
          <span className="mx-1 text-sm sm:text-base">{label}</span>
        </button>
      ))}
    </div>
  );
}

export default Tabs;
