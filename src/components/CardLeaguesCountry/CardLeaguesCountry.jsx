import React from "react";

const CardLeaguesCountry = (l) => {
  return (
    <div className="md:w-40 md:h-32 md:rounded-2xl bg-pf-white md:flex md:flex-col md:gap-2 md:justify-between md:items-center transform hover:scale-[101%] transition-all duration-300">
      {/* Cada componente estaría envuelto en una etiqueta link que me lleve al detial de la liga */}
      <img
        src={l.image_path}
        alt={`Escudo ${l.name}`}
        className="md:max-w-[50%] md:mx-auto md:mt-4 md:-mb-6"
      ></img>
      <div>
        <span className="md:-mb-10">{l.name}</span>
      </div>
    </div>
  );
};

export default CardLeaguesCountry;
