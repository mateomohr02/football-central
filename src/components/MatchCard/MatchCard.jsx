

const MatchCard = ({local,visitor}) => {
  return <div className="md:w-96 md:h-24 md:mr-2.5 md:ml-2.5 md:mb-2.5 md:mt-2.5 bg-pf-white md:flex md:flex-col md:justify-center md:items-start md:gap-4 md:pl-4 ">
    <p className="text-black">{local}</p>
    <p className="text-black">{visitor}</p>
  </div>;
};

export default MatchCard;
