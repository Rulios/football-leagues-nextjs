import React, { useEffect, useState } from "react";
import Club from "./Club/Club"

import { IClub } from "../../types/Club";

interface Props{
  clubs: IClub[];
}

export const ClubList = ({clubs}: Props) => {



  return (
    <div className="flex flex-col justify-center text-white items-center p-6">
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {clubs.map((club) => (
          <Club key={club.code} club={club} />
        ))}
      </ul>
    </div>
  );
};
