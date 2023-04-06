"use client";

import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import AirBnbLogo from "../../public/images/airbnb.png";

'use client'


type Props = {};

const Logo = (props: Props) => {
  return (
    <div>
      <Image
        src={AirBnbLogo}
        alt="airbnb logo"
        className="hidden md:block cursor-pointer"
        height={100}
        width={100}
      ></Image>
    </div>
  );
};

export default Logo;
