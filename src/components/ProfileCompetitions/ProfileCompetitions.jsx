import React from "react";
import DetailCompetitions from "../../views/DetailCompetition/DetailCompetition";
import style from "./ProfileCompetitions.module.css";

const ProfileCompetitions = () => {
    return(
        <div className={style.container}>
            <div className={style.button}>
                <button>
                    <DetailCompetitions />
                </button>
                <button>
                    <DetailCompetitions />
                </button>
                <button>
                    <DetailCompetitions />
                </button>
                <button>
                    <DetailCompetitions />
                </button>
                <button>
                    <DetailCompetitions />
                </button>
            </div>
        </div>
    )
}

export default ProfileCompetitions;
