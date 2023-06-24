import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getLeaguesCountry } from "../../redux/actions/getLeaguesCountry";
import { resetLeaguesCountry } from "../../redux/actions/resetLeaguesCountry";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import DropdownButton from "../../components/Dropdownbutton/DropdownButton";
import CardLeaguesCountry from "../../components/CardLeaguesCountry/CardLeaguesCountry";


const CountryCompetitions = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getLeaguesCountry(id));
    return () => dispatch(resetLeaguesCountry());
  }, [dispatch, id]);

  const leagues = useSelector((state) => state.countryLeagues);

  return (
    <div className="bg-pf-grey md:h-[90vh] md:overflow-hidden md:flex md:justify-center md:items-center ">
      <div className="bg-pf-blue md:w-[90%] md:h-[90%] md:rounded-xl">
        {/* barra de breadcrumb y filters */}
        <div className=" md:flex md:justify-end md:items-center md:pr-5 md:flex-row md:gap-x-5 md:h-[12%] md:w-[98%] md:mx-auto md:mb-5 border-b-2 ">
          <div className="md:pl-5 md:w-[50%]">
            <Breadcrumb />
          </div>
          <div className=" md:w-[50%] md:flex md:justify-end">
            <DropdownButton buttonLabel="Ordenar" options={["A-Z", "Z-A"]} showIcon={true} />
          </div>
        </div>

        {/* container de cards de ligas */}
        <div className=" md:w-full md:h-[80%] md:px-5 md:gap-5 md:flex md:flex-row md:justify-start md:mt-4">
          {leagues.map((l) => {
            return (
              <Link to={`/competiciones/ligas/${l.id}`}>
                <CardLeaguesCountry
                  key={l.id}
                  image_path={l.image_path}
                  name={l.name}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CountryCompetitions;
