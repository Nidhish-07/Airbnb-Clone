"use client";

import React from "react";

import Image from "next/image";
import UserLogo from "../../public/images/user.png";

type Props = {};

const User = (props: Props) => {
  return (
    <div>
      <Image
        src={UserLogo}
        alt="user logo"
        height={30}
        width={30}
        className="rounded-full"
      ></Image>
    </div>
  );
};

export default User;
