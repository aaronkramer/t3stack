import type { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";
import { trpc } from "../utils/trpc";

const NavButton: React.FC = () => {
  return (
    <>
        <a href="/">Here</a>
    </>
  )
}


const NavBar: React.FC = () => {
  return (
    <>
      <div className='px-[25%] h-10 bg-slate-500 text-white text-xl pt-1 text-center flex flex-row place-content-between	'>
      <a href="/">Home</a>
      <a href="/history">History</a>
      <a href="/">Options</a>
      <a href="/">Settings</a>
      <a href="/">Profile</a>
      <a href="/api-tests">API</a>
      </div>
    </>
  );
};

export default NavBar;
