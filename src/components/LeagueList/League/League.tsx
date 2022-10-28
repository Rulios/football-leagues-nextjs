import Link from "next/link";
import React, { FC } from "react";
import ILeague from "../../../types/League";
import Image from "next/image";

interface TProps {
  league: ILeague;
}

const League: FC<TProps> = ({ league }) => {
  return (
    <li className="relative">
      <Link href={`/leagues/${league.keyword}`}>
        <Image className="cursor-pointer" src={league.logo} width={200} height={200} alt={`${league.name} Poster`} />
      </Link>
      <br />
      <strong className="text-lg">{league.name}</strong>
    </li>
  );
};

export default League;
