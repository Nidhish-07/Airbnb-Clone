"use client";

import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import Search from "./Search";
import Menu from "./Menu";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b">
        <Container>
          <div className="flex flex-col items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <Menu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;
