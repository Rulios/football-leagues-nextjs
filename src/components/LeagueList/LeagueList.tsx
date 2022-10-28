import React, { useEffect, useState } from "react";
import League from "./League/League"

import ILeague from "../../types/League";


interface Props{
  leagues: ILeague[];
}

export const LeagueList = ({leagues}: Props) => {
  return (
    <div className="flex flex-col justify-center text-white items-center p-6">
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {leagues.map((league) => (
          <League key={league.keyword} league={league} />
        ))}
      </ul>
    </div>
  );
};
