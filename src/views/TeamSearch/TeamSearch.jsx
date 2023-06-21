import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import style from './TeamSearch.module.css'
import { resetMatchedTeams } from '../../redux/actions/resetMatchedTeams'


import CardSearch from '../../components/CardSearch/CardSearch'

const TeamSearch = () => {

    const dispatch = useDispatch();

    const matchedTeams = useSelector(state => state.showedTeams)

    useEffect(() => {
        return () => {
          dispatch(resetMatchedTeams());
        };
      }, [dispatch]);
      
  return (
    <div className={style.container}>
        {matchedTeams.map(t =>{
            return(
                <Link to={`/team/${t.id}`}>
                    <CardSearch team={t}/>
                </Link>
            )
        })}    
    </div>
  )
}

export default TeamSearch