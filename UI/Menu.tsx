"use client";

import React from "react";

import { AiOutlineMenu } from "react-icons/ai";
import User from "./User";
import Item from "./Item";

type Props = {};

const Menu = (props: Props) => {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = React.useCallback(() => {
    setOpen((value) => !value);
  }, []);
  return (
    <div className="relative">
      <div className="flex flex-row item-center gap-3">
        <div
          onClick={() => {}}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Airbnb Your Home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-1 border border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <User />
          </div>
        </div>
      </div>

      {open && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <div>

            <Item onClick={() => {}} label="Login"></Item>
            <Item onClick={() => {}} label="Sign Up"></Item>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
