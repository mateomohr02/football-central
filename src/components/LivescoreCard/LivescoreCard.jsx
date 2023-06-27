import { Link } from "react-router-dom";

const MatchCard = ({
  home,
  homeLogo,
  away,
  awayLogo,
  time,
  homeScore,
  awayScore,
  state,
}) => {
  console.log("el logo local", homeLogo);
  return (
    <Link>
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
          <div className=" md:w-[30%] md:flex  md:justify-center my-2 mr-[2px] md:item-center">
            <div className=" flex md:flex-col md:justify-center items-center gap-y-1 w-[30%] ">
              <h1 className="my-auto text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
                {homeScore}
              </h1>
              <h1 className="my-auto text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
                {awayScore}
              </h1>
            </div>

            {/* container del minuto  */}
            <div className=" w-[70%] border-l h-full flex md:flex-col md:justify-center items-center text-base font-semibold text-pf-white">
              {state === "ET" ? <p>ET</p> : <p>{time}'</p>}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MatchCard;
