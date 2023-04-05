"use client";

import React from "react";

type Props = {};

interface ItemProps {
  onClick: () => void;
  label: string;
}

const Item: React.FC<ItemProps> = ({ onClick, label }) => {
  return (
    <div className="px-4 py-3 hover:bg-neutral-100 transition font-semibold" onClick={onClick}>
        {label}
    </div>
  );
};

export default Item;
