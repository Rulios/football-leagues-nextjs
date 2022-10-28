import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { ApplicationWrapper } from "../../components/layout/ApplicationWrapper";
import { IClub } from "../../types/Club";
import ILeague from "../../types/League";

interface TProps {
  club: IClub; 
}

const Club: NextPage<TProps> = ({ club }) => {


  return (
    <ApplicationWrapper title={club.name}>
      <div className="text-center mt-8 px-32">
        <h1 className=" text-2xl">{club.name}</h1>
          <h4>{club.code}</h4>
          <h6>{club.country}</h6>

          <p className="my-10">{club.description}</p>
      </div>



    </ApplicationWrapper>
  );
};



export const getStaticProps: GetStaticProps = async (context) => {

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/leagues`
    );
    const leagues = await res.json();

    let club: IClub | null = null; 

    for(let i = 0; i < leagues.length; i++){
      club = leagues[i].clubs.find((club: IClub) => club.code === context.params?.clubCode)

      if(club) break;
    }


    return {
      props: {
        club,
      },
    };
};

export async function getStaticPaths(){

  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/leagues")
  
  const leagues: ILeague[] = await res.json();

  let ways: any = []
  
  leagues.map((league) => {
    league.clubs.map((club) => (


      ways.push({params: {clubCode: club.code}})
    ))
  })

  return {
    paths: ways,

    fallback:false
  };
}

export default Club;
