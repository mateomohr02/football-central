import React from "react";
import DetailTeam from  "../../views/DetailTeam/DetailTeam";
import style from "./ProfileTeams.module.css"

const ProfileTeams = ()=>{
  return(
    <div className={style.container}>
        <div className={style.button}>
            <button>
                <DetailTeam />
            </button>

            <button>
                <DetailTeam />
            </button>

            <button>
                <DetailTeam />
            </button>

            <button>
                <DetailTeam />
            </button>

            <button>
                <DetailTeam />
            </button>
        </div>
    </div>
  )
}

export default ProfileTeams;