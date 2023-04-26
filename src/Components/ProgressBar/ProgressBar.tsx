import React, { useState, useEffect } from "react";

type ProgressBarTypes = {
  level: number;
  showText: boolean;
  color?: string;
};

const ProgressBar = (props: ProgressBarTypes) => {
  const [level, setLevel] = useState(props.level);
  const [originalLevel, setOriginalLevel] = useState(props.level);

  useEffect(() => {
    setLevel(props.level);
    setOriginalLevel(props.level);
  }, [props.level]);

  const progressLevel = Math.min(Math.max(level, 10), 100);

  const widthStyle = {
    width: `${progressLevel}%`,
    transition: "width 0.7s linear",
  };

  const handleMouseEnter = () => {
    setLevel(0);
    setTimeout(() => {
      setLevel(props.level);
    }, 700);
  };

  const handleMouseLeave = () => {
    setLevel(originalLevel);
  };

  return (
    <div
      className={`h-[2.3rem] w-[100%] dark:bg-white bg-deep-blue ${props.color && `bg-white border-[1px] border-gray-300 text-white`} rounded-[3px] p-[3px] flex flex-row flex-nowrap justify-start items-center`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <span
        style={widthStyle}
        className={`bg-white dark:bg-deep-blue relative left-0 transition ease-in duration-1000 min-w-[30%] h-[100%] rounded-[3px] flex flex-row flex-nowrap justify-start px-1 items-center `}>
        {props.showText && `${level}%`}
      </span>
    </div>
  );
};

export default ProgressBar;
