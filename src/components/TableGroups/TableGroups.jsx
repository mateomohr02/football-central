import React from "react";

const TableGroups = ({ group }) => {
  return (
    <div
      key={group?.group_id}
      className="my-3 rounded-xl  w-[400px] shadow-sm shadow-gray-100 bg-gray-200 ml-5"
    >
      <table>
        <thead>
          <tr className=" flex h-[40px]  ">
            <div className="w-[85%] flex justify-start pl-16 items-center ">
              <th className="font-regular text-xl text-black">Grupo {group?.name}</th>
            </div>
            <div className="w-[15%]  flex justify-center items-center border-l border-black">
              <th className="font-regular text-xl text-black">Pts.</th>
            </div>
          </tr>
        </thead>
        <tbody>
          {group?.standings?.map((team) => {
            return (
              <tr
                key={team.teamId}
                className=" gap-y-56 flex justify-between w-[400px]"
              >
                <div className="w-[85%] pl-2 flex justify-start items-center gap-3 gap-y-2 border-t border-pf-blue py-1">
                  <td>
                    <img
                      src={team.teamData.image_path}
                      alt={`Escudo ${team.teamData.name}`}
                      className="max-h-10"
                    />
                  </td>
                  <td className="text-black uppercase font-light">{team.teamData.name}</td>
                </div>
                
                <div className="w-[15%] flex justify-center items-center border-l border-t border-pf-blue py-1">
                  <td  className="text-black ">{team.points}</td>
                </div>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableGroups;
