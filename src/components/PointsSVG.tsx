import Image from "next/image";
import React from "react";

interface IProps {
  className?: string;
}

const PointsSVG = ({ className }: IProps) => {
  return (
    <div className={`${className} flex flex-col gap-1`}>
      <Image src="/Icons/points.svg" width={5} height={5} alt="points" />
    </div>
  );
};

export default PointsSVG;
