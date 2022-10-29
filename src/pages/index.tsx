import React, { NextPage } from "next";
import { ApplicationWrapper } from "../components/layout/ApplicationWrapper";

type HomeProps = {
  response: string;
};

const Home: NextPage<HomeProps> = () => {
  return (
    <ApplicationWrapper
      title="Home"
      description="Home of the Football teams of the Season 2020/21"
    >
      <div className="grow flex flex-col justify-center items-center bg-[url('/images/home-bg.jpg')]">
        <div className="grow bg-black w-full justify-center items-center flex opacity-70">
          <h1 className="text-7xl font-bold underline text-white">
            FOOTBALL TEAMS SEASON 2020/21
          </h1>

          <h6>Made by Robert Lu Zheng | email: rluzheng@gmail.com</h6>
        </div>
      </div>
    </ApplicationWrapper>
  );
};

export default Home;
