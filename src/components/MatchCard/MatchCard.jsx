const MatchCard = ({ home, away, hour, league }) => {
  return (
    <div className="flex flex-row w-[300px] md:h-28 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      {/* container de la imagen */}
      <div
        className="w-[30%] bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')",
        }}
      ></div>

      {/* container del texto */}
      <div className=" flex flex-row justify-between md:w-[70%]">
        {/* container de nombres de equipos */}
        <div className="flex md:flex-col gap-y-1 justify-around items-start my-2 ml-[2px] md:min-w[70%]">
          <h1 className="text-lg font-bold text-gray-800 dark:text-white">
            {home}
          </h1>
          <h1 className="text-lg font-bold text-gray-800 dark:text-white">
            {away}
          </h1>
        </div>

        {/* container de resultado */}
        <div className="border-l md:w-[30%] md:flex md:justify-center my-2 mr-[2px] md:item-center">
          <h1 className="my-auto text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
            {hour}
          </h1>
        </div>
      </div>
      {/* container de nombre de la liga */}
    </div>
  );
};

export default MatchCard;
