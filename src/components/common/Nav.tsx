import Link from "next/link";
import React, { FC , useContext} from "react";
import { UserContext } from "../UserContext";

export const Nav: FC = () => {

  const {loggedUser, setLoggedUser} = useContext(UserContext)

  return (
    <nav className="w-full text-black flex gap-5 p-6 items-center text-2xl">

      <div className="w-full mx-4">
        <Link href="/">
          <a>Home</a>
        </Link>
        {/* -- 5px -- */}
        <Link href="/leagues" className="">
          <a className="mx-2">Leagues</a>
        </Link>

        <div className="float-right">
          {loggedUser && <span>User is {loggedUser} </span>}
          {!loggedUser && <span>Not logged in </span>}

          <button onClick={() => setLoggedUser("Robert")} className="border-solid border-2 border-indigo-600">Log in</button>
        </div>

      </div>
    </nav>
  );
};
