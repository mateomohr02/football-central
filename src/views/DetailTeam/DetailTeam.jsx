import { useParams } from "react-router-dom"; 
 import style from "./DetailTeam.module.css"; 
 import { useDispatch, useSelector } from "react-redux"; 
 import { useEffect } from "react"; 
 import { getDetailTeam } from "../../redux/actions/getDetailTeam"; 
 import { getVenueById } from "../../redux/actions/getVenueById"; 
 import { getTeamSquadByTeamId } from "../../redux/actions/getTeamSquadByTeamId"; 
  
 const DetailTeam = () => { 
   const { id } = useParams(); 
   const dispatch = useDispatch(); 
  
  
   const team = useSelector((state) => state.team.detailTeam); 
   const playersId = team.players 
   const teamSquad = useSelector(state => state.team.teamSquad) 
   const venue = useSelector((state) => state.venue.venue); 
   console.log('players ids ', playersId) 
  
   useEffect(() => { 
     dispatch(getDetailTeam(id)); 
     dispatch(getTeamSquadByTeamId(playersId)); 
     if (team && team.venue_id) { 
       dispatch(getVenueById(team.venue_id)).catch((error) => { 
         console.error("Error al obtener el estadio:", error); 
       }); 
     } 
   }, [dispatch, id]); 
  
  
  
   console.log('team squad 32 desde componente',teamSquad) 
   /*  
   const background = venue ? `url(${venue.image_path})` : ""; */ 
  
   return ( 
     <div className="w-[90vw] h-[90vh] bg-red-500 mx-auto mt-5"> 
       <div className="w-full h-[40%] bg-yellow-500 flex items-center"> 
         <div className="bg-orange-500 w-[30%] h-full flex justify-center items-center"> 
           <img src={team.image_path} alt={team.name} className="h-[85%]" /> 
         </div> 
         <div className={style.dataContainer}> 
           <h3>{team.name}</h3> 
           <p>Año de fundación: {team.founded}</p> 
           <p>Estadio: {venue.name}</p> 
         </div> 
       </div> 
        <div>
          <h4>Plantilla</h4>
           {
            
           }
        </div>
  
       <div></div> 
     </div> 
   ); 
 }; 
  
 export default DetailTeam;