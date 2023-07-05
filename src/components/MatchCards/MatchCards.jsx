import LivescoreCards from "../LivescoreCards/LivescoreCards";
import { FixtureCards } from "../FixtureCards/FixtureCards";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import { Link } from "react-router-dom";


const MatchCards = () => {
  return (
    <div className="md:absolute md:top-[650px] md:w-[50%] md:ml-16 bg-pf-dark-grey md:flex md:flex-col md:justify-center pl-[10px] pt-3 md:rounded-xl">
      <Link to="/fixtures">
      <div className="h-10 bg-pf-white flex gap-1 justify-center items-center mr-3 rounded-lg">
        <h4 className=" font-bold text-xl text-pf-blue">TODOS LOS PARTIDOS</h4>
        <KeyboardDoubleArrowRightRoundedIcon className="" />
      </div>
      </Link>
      <LivescoreCards />
      <FixtureCards />
    </div>
  );
};

export default MatchCards;
