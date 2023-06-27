import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTeams } from "../../redux/actions/action-teams";
import DropdownButton from '../../components/Dropdownbutton/DropdownButton';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'

const Teams = () => {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.team.teams_filter);
  useEffect(() => {
    dispatch(getTeams());
    
  }, [dispatch]);
  console.log('Teams:', teams);
  return (
    <div className=" md:h-[90vh] md:overflow-hidden md:flex md:justify-center md:items-center ">
      <div className="bg-pf-blue md:w-[90%] md:h-[90%] md:rounded-xl">
      <div className=" md:flex md:justify-end md:items-center md:pr-5 md:flex-row md:gap-x-5 md:h-[12%] md:w-[98%] md:mx-auto md:mb-5 border-b-2 ">
          <div className="md:pl-5 md:w-[50%]">
            <Breadcrumb />
          </div>
          <div className=" md:w-[50%] md:flex md:justify-end md:gap-x-5">
            <DropdownButton buttonLabel="Ordenar" options={["A-Z", "Z-A"]} showIcon={true}/>
          </div>
        </div>
    <div className=" md:w-full md:h-[80%] md:px-5 md:gap-5 md:flex md:flex-row md:justify-start">

      {teams.map((team) => (
        <div className="md:w-36 md:h-28 md:rounded-2xl bg-pf-white md:flex md:flex-col md:gap-2 md:justify-center md:items-center transform hover:scale-[101%] transition-all duration-300">
          <img src={team.image_path} alt={team.name} className="md:w-[70%] md:mx-auto" />
          <h3>{team.name}</h3>
        </div>
      ))}
      </div>
      </div>
    </div>
  );
};

export default Teams;
