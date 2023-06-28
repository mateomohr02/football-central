import LivescoreCards from "../LivescoreCards/LivescoreCards";
import { FixtureCards } from "../FixtureCards/FixtureCards";

const MatchCards = () => {
  return (
    <div className="md:absolute md:top-[650px] md:w-[50%] md:ml-16 bg-pf-dark-grey md:flex md:flex-col md:justify-center pl-[10px] pt-3 md:rounded-xl">
      <LivescoreCards />
      <FixtureCards />
    </div>
  );
};

export default MatchCards;
