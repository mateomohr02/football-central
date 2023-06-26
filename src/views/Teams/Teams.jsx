import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTeams, getTeamsNational } from "../../redux/actions/action-teams";
import DropdownButton from '../../components/Dropdownbutton/DropdownButton';


const Teams = () => {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.team.teams_filter);
  useEffect(() => {
    dispatch(getTeams());
    
  }, [dispatch]);
  console.log('Teams:', teams);
  return (
    <div>
      <DropdownButton buttonLabel="Ordenar" options={["A-Z", "Z-A"]} showIcon={true}/>
      <h2>Equipossss</h2>
      {teams.map((team) => (
        <div >
          <h3>{team.name}</h3>
          <img src={team.image_path} alt={team.name} />
        </div>
      ))}
    </div>
  );
};

export default Teams;
