import React from "react";

interface IProps {
  number: number;
  text: string;
}

const Timer = ({ number, text }: IProps) => {
  return (
    <div className="flex items-center flex-col gap-2">
      <h3 className="text-[var(--numColor)] text-lg font-bold">{number}</h3>
      <span className="text-[var(--secondary)] text-sm font-bold">{text}</span>
    </div>
  );
};

export default Timer;
