import Head from "next/head";
import React, { FC, PropsWithChildren } from "react";
import { Nav } from "../common/Nav";

interface TProps {
  title: string;
  description?: string;
}

export const ApplicationWrapper: FC<PropsWithChildren<TProps>> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex flex-col">
      <Head>
        <title>{`${title} | Football`}</title>
        {description && <meta name="description" content={description} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className="bg-white h-20">
        <Nav />
      </header>

      <main className="grow flex flex-col text-white">{children}</main>
      <footer className="flex p-6 h-20 text-black bg-white items-center justify-center">

        <span>
        Made by  

          <a href="https://github.com/Rulios" className="underline underline-offset-8"> Robert Lu Zheng </a>

        for Next.JS Rootlab
        </span>
        
      </footer>
    </div>
  );
};
