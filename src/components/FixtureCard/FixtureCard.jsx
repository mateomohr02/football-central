const FixtureCard = ({
  home,
  homeLogo,
  away,
  awayLogo,
  hour,
  time,
  homeScore,
  awayScore,
  state,
}) => {
  return (
    <div className="flex flex-row w-[300px] md:h-28 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      {/* container de la imagen */}
      <div className="bg-pf-white w-[16%] bg-cover flex md:flex-col ">
        <div className="md:h-[50%] md:w-full flex md:justify-center md:items-center">
          <img src={homeLogo} alt="" className="h-[80%]" />
        </div>

        <div className="md:h-[50%] md:w-full flex md:justify-center md:items-center">
          <img src={awayLogo} alt="" className="h-[80%]" />
        </div>
      </div>

      {/* container del texto */}
      <div className=" flex flex-row justify-between md:w-[84%] text-base font-semibold">
        {/* container de nombres de equipos */}
        <div className="flex md:flex-col gap-y-1 justify-around items-start my-2 ml-[2px] md:min-w[70%]">
          <h1 className=" text-gray-800 dark:text-white">{home}</h1>
          <h1 className=" text-gray-800 dark:text-white">{away}</h1>
        </div>

        {/* container de resultado */}
        <div className="md:w-[25%] md:flex  md:justify-center my-2 mr-[2px] md:item-center">
          {/* container de la hora  */}
          <div className=" w-full border-l h-full flex md:flex-col md:justify-center items-center text-base font-semibold text-pf-white">
            <p>{hour}</p>
          </div>
        </div>
      </div>
      {/* container de nombre de la liga */}
    </div>
  );
};

export default FixtureCard;
