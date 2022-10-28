import type { GetStaticProps, NextPage } from "next";
import { ApplicationWrapper } from "../../components/layout/ApplicationWrapper";
import { LeagueList } from "../../components/LeagueList/LeagueList";
import League from "../../types/League";

interface TProps {
  leagues: League[]
  response: string;
}

const Movies: NextPage<TProps> = ({leagues}: TProps) => {
  return (
    <ApplicationWrapper
      title="Leauges"
      description="Available leagues"
    >
      <LeagueList leagues={leagues}/>
    </ApplicationWrapper>
  );
};

export const getStaticProps: GetStaticProps = async () =>{

  const leagues = await fetch(process.env.NEXT_PUBLIC_API_URL + "/leagues")
      .then((res) => res.json())
      .then((data: League[]) => data.slice(0, 20))
      .catch((error) => console.error(error));
      
  return {
    props: {
      leagues
    },

    //Incremental static regeneration 
    revalidate: 10
  }

}

export default Movies;
