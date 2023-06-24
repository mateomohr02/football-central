const MatchCard = ({ local, visitor, hour, league }) => {
  return (
    <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      {/* container de la imagen */}
      {/* <div
        className="w-1/3 bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')",
        }}
      ></div> */}

      {/* container del texto */}
      <div className="w-2/3 p-4 md:p-4">
        {/* container de nombres de equipos */}
        <div>
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            {local}
          </h1>
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            {visitor}
          </h1>
        </div>

        {/* container de resultado */}
        <div className="flex justify-between mt-3 item-center">
          <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
            {hour}
          </h1>
        </div>

        {/* container de nombre de la liga */}
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
        </p>
      </div>
    </div>
  );
};

export default MatchCard;
