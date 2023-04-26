import React, { useState } from "react";
import { motion } from "framer-motion";
type CardTypes = {
  otherSection?: boolean;
  cardTitle: string | any;
  cardDescription: string | any;
  cardImage: string;
  cardLinks?: any;
};
const Card = (props: CardTypes) => {
  const { cardTitle, cardDescription, cardImage, cardLinks, otherSection } =
    props;
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <section
      className={
        otherSection
          ? `bg-white dark:bg-deep-blue h-[30rem] w-[22rem] md:h-[35rem] md:w-[35rem] border-[1px] rounded-[10px] overflow-hidden border-gray-100 dark:border-white/30 dark:hover:border-white/40 hover:border-gray-300 flex flex-col  relative cursor-pointer justify-start items-center`
          : `bg-white dark:bg-deep-blue h-[25rem] w-[22rem] md:h-[15rem] md:w-[42rem] border-[1px] rounded-[10px] overflow-hidden border-gray-200  dark:border-white/30 dark:hover:border-white/40 hover:border-gray-300 flex flex-col md:flex-row relative cursor-pointer justify-start items-center `
      }
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}>
      <div
        className={
          otherSection
            ? `hidden`
            : `siderDiv z-10 absolute left-[-110%] overflow-hidden flex flex-row justify-center items-center rounded-[5px] ${
                mouseOver && "left-[0]"
              } h-[100%] w-[100%] transition-all ease-in-out duration-1000 z-10`
        }>
        <div className="h-[100%] w-[100%] blur-1 absolute z-[0] bg-dark-grey/10 dark:bg-deep-blue/90 text-deep-blue dark:text-white"></div>
        <span className="z-[10] flex flex-row gap-10 dark:text-white text-deep-blue bg-clip-text">
          {cardLinks &&
            cardLinks.props.children &&
            cardLinks.props.children.map(
              (link: React.ReactNode, index: number) => (
                <span
                  key={index}
                  className="group hover:text-white flex justify-center">
                  <span className="absolute rounded-full group-hover:bg-dark-grey/40 h-[2.8rem] w-[2.8rem] z-[-1] md:top-[41%] top-[44.5%]"></span>
                  {link}
                </span>
              )
            )}
        </span>
      </div>
      <motion.div
        className={
          otherSection
            ? `order-1 py-2 m-0 md:w-[15rem] md:h-[50%] h-[10rem] w-[40%] hover:scale-100 `
            : `order-1 py-2 m-0 md:w-[22rem] md:h-[100%] h-[10rem] w-[100%]m `
        }
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 1 }}
        transition={{ type: "spring", bounce: 0.8, duration: 3 }}
        variants={{
          hidden: {
            y: -20,
          },
          visible: {
            y: 0,
          },
        }}>
        <img
          src={cardImage}
          alt="image"
          className="order-1 h-full rounded-[5px] w-full overflow-hidden mt-5 p-3"
        />
      </motion.div>
      <div
        className={
          otherSection
            ? `order-2 flex justify-start items-center gap-3 flex-col relative w-[100%] h-[100%] text-deep-blue gap-y-2 dark:text-white bg-white dark:bg-deep-blue rounded-[5px] overflow-hidden`
            : `order-2 p-2 relative md:w-[100%] md:h-[100%] h-[90%] w-[100%] text-deep-blue dark:text-white flex flex-col gap-y-2 bg-white dark:bg-deep-blue rounded-[5px] overflow-hidden`
        }>
        <h2 className="font-semibold text-[18px] m-0 p-2 text-center w-full overflow-hidden">
          {cardTitle}
        </h2>
        <div className="overflow-hidden m-0 px-3 w-full text-center md:px-0">
          {cardDescription}
        </div>
      </div>
    </section>
  );
};

export default Card;
