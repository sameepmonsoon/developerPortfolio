import React, { useState } from "react";
type HoveCard = {
  //to reuse this card in other pages
  otherSection?: boolean;
  hoverTransitionTitle: string;
  subTitle: string;
  progressBar: React.ReactElement;
  transitionTitleColor?: any;
  color?: string;
};
const HoverCard = (props: HoveCard) => {
  const { hoverTransitionTitle, subTitle, progressBar, otherSection, color } =
    props;
  const [hover, setHover] = useState(false);
  return (
    <div
      className={
        otherSection
          ? ` md:min-h-[20rem]  md:h-auto lg:h-auto lg:min-h-[25rem] sm:w-[35rem] md:w-[45rem] lg:w-[43.5rem] min-h-[19rem] h-auto w-[22rem] rounded-[15px]  bg-white dark:bg-deep-blue overflow-hidden cursor-pointer border-[1px] border-gray-200 dark:border-white/20 `
          : ` md:min-h-[16rem] md:min-w-[15rem] lg:w-20rem lg:w-[20rem] lg:min-h-[19rem] md:h-auto min-h-[19rem] h-auto w-[17rem] rounded-[8px]  bg-white dark:bg-deep-blue overflow-hidden cursor-pointer border-[1px] border-gray-200 dark:border-white/20`
      }
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}>
      <div className="relative z-[1] md:h-[8rem] lg:h-[10rem] h-[9rem] flex flex-row justify-start items-center overflow-hidden gap-40 text-deep-blue dark:text-white ">
        <h1
          style={{ color: color }}
          className={
            otherSection
              ? ` font-bold background-title  relative font-[fantasy,sans] lg:font-[1000] w-[500px] h-[80%] whitespace-nowrap z-[1] md:text-8xl lg:text-8xl text-[5.5rem] left-[10rem] uppercase ${
                  hover && "translate-x-[-31rem]"
                } transition ease-in-out duration-[2s] ${
                  color ? `text-${color}` : `dark:text-white text-deep-blue `
                } `
              : ` background-title  relative font-[fantasy,sans] font-bold w-auto h-[80%] z-[0] whitespace-nowrap md:text-8xl text-9xl lg:text-9xl lg:font-[1000] left-[10rem] uppercase ${
                  hover && "translate-x-[-30rem]"
                } transition ease-in-out duration-[2s] opacity-100 z-[1] ${
                  color ? `text-${color}` : `dark:text-white text-deep-blue `
                }`
          }>
          {hoverTransitionTitle}
        </h1>
        {/* sits behind the marquee title as a back drop */}
        <h1
          className={
            otherSection
              ? `absolute  text-deep-blue/10 font-bold dark:text-yellow/10 background-title font-[fantasy,sans] lg:font-[1000] w-[500px] h-[80%] whitespace-nowrap z-[0] md:text-[7rem] md:-top-[1.4rem] lg:text-[8rem] lg:-top-8 text-[5.5rem] 
              left-[0rem] top-0 uppercase transition ease-in-out duration-[2.5s]`
              : `absolute  text-deep-blue/10 font-bold dark:text-yellow/10 background-title font-[fantasy,sans] w-auto h-[80%] z-[0] whitespace-nowrap md:text-8xl text-9xl lg:text-[9rem] lg:top-2 lg:font-[1000] left-[0rem] uppercase
                } transition ease-in-out duration-[2s]  text-deep-blue dark:text-white`
          }>
          {hoverTransitionTitle}
        </h1>
        <h1
          style={{ color: color }}
          className={
            otherSection
              ? `hidden `
              : `relative font-bold background-title font-[fantasy,sans] w-auto h-[80%] z-[0] whitespace-nowrap md:text-8xl text-9xl lg:text-9xl lg:font-[1000]  left-[3rem] uppercase ${
                  hover && "translate-x-[-30rem]"
                } transition ease-in-out duration-[2s] ${
                  color ? `text-${color}` : `dark:text-white text-deep-blue `
                }`
          }>
          {hoverTransitionTitle}
        </h1>
      </div>
      <div className="px-3">
        <span
          // style={{ color: color }}
          className={
            otherSection
              ? `
        
        title relative z-[1] bg-transparent md:text-[25px] text-[25px] lg:text-[30px] font-bold uppercase whitespace-nowrap text-deep-blue dark:text-white`
              : `
        
        title relative z-[1] bg-transparent md:text-[20px] text-[25px] lg:text-[30px] font-bold font-[fantasy,sans] uppercase whitespace-nowrap text-deep-blue dark:text-white`
          }>
          {subTitle}
        </span>
        <div
          // style={{ color: color }}
          className={
            otherSection
              ? `progress-bar  relative z-[1] bg-transparent text-[18px] py-5 text-deep-blue   dark:text-white`
              : `progress-bar relative z-[1] bg-transparent text-[20px] py-3 text-deep-blue dark:text-white`
          }>
          {progressBar}
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
