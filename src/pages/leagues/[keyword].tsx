import { GetStaticProps, NextPage } from "next";
import React from "react";
import { ApplicationWrapper } from "../../components/layout/ApplicationWrapper";
import { IClub } from "../../types/Club";
import ILeague from "../../types/League";
import { ClubList } from "../../components/ClubList/ClubList";

interface TProps {
  league: ILeague; 
}

const LeagueClubs: NextPage<TProps> = ({ league }) => {


  return (
    <ApplicationWrapper title={league.name}>

      <h1 className="text-center text-2xl font-bold my-10">{league.name}</h1>
      <div className="px-30">
        <ClubList clubs={league.clubs}/>
      </div>

    </ApplicationWrapper>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/leagues?keyword=${context.params?.keyword}`
  );


  const league = await res.json();


  return {
    props: {
      league: league[0],
    },
  };
};

export async function getStaticPaths(){

  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/leagues")
  
  const leagues: ILeague[] = await res.json();

  const ways = leagues.map((league) => ({
    params: {keyword: league.keyword}
  }));

  return {
    paths: ways,

    fallback:false
  };
}

export default LeagueClubs;
