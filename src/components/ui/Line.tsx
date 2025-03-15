import Image from "next/image";
import React from "react";

const Line = () => {
  return (
    <Image
      src="/Icons/Line 1.svg"
      width={8}
      height={8}
      className="absolute top-0 left-[39%] -translate-x-1/2 "
      alt="line"
    />
  );
};

export default Line;
