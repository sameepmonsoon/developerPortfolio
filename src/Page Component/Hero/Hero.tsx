import React, { useEffect, useState } from "react";
import defaulUserImage from "../../assets/userImage.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SocialMediaIcons from "../../Components/SocialMediaIcons/SocialMediaIcons";
import {
  AiFillGithub,
  GrLinkedinOption,
  AiOutlineInstagram,
  BsFacebook,
  ImTwitter,
} from "react-icons/all";
import { Link as ScrollLink } from "react-scroll";
const Hero = (props: {
  userName: string | any;
  userIntroduction: string | any;
  resumeButton?: React.ReactElement;
  optionalButton?: string;
  optionalButtonPath?: string;
  userImage: string;
}) => {
  const {
    userName,
    userIntroduction,
    resumeButton,
    optionalButton,
    optionalButtonPath,
    userImage,
  } = props;
  return (
    <section className="snap-start md:flex-row md:h-screen gap-16 py-1 px-10 flex flex-col items-center justify-center dark:bg-deep-blue">
      <div className="heroText order-2  flex flex-col w-[25rem] md:w-[40rem] pr-3 gap-3 text-deep-blue dark:text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: {
              opacity: 0,
              x: -50,
            },
            visible: {
              opacity: 1,
              x: 10,
            },
          }}>
          <p className="text-[4rem] font-[fantasy,sans] font-[700] z-10 text-center md:text-start whitespace-rap capitalize w-full h-auto h-max-[10rem] md:h-auto md:max-h-[7rem] overflow-hidden">
            {userName}
          </p>
          <p className="mt-2 mb-7 md:text-[18px] text-lg text-center md:text-start px-5 md:px-0 break-words max-h-[5.5rem] overflow-hidden">
            {userIntroduction}
          </p>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: {
              opacity: 0,
              x: -50,
            },
            visible: {
              opacity: 1,
              x: 10,
            },
          }}>
          <span className="flex flex-row transition duration-500 justify-center overflow-hidden flex-nowrap items-center min-h-[2.3rem] text-[1rem] font-semibold max-h-[2.6rem] w-auto max-w-[7rem] min-w-[6rem] px-1 rounded-[5px]  hover:bg-deep-blue hover:text-white hover:border-[1px] hover:border-white text-deep-blue dark:text-white dark:hover:text-deep-blue border-[1px] border-deep-blue/40 dark:border-white/40 dark:hover:bg-white">
            {resumeButton}
          </span>
          <ScrollLink
            smooth={true}
            duration={500}
            to={optionalButtonPath ? optionalButtonPath.toString() : "/"}
            className="flex flex-row transition cursor-pointer duration-500 justify-center overflow-hidden flex-nowrap items-center min-h-[2.3rem] text-[0.9rem] font-semibold max-h-[2.6rem] w-auto max-w-[7rem] min-w-[6rem] px-1 rounded-[5px]  hover:bg-deep-blue hover:text-white hover:border-[1px] hover:border-white text-deep-blue dark:text-white dark:hover:text-deep-blue border-[1px] border-deep-blue/40 dark:border-white/40 dark:hover:bg-white">
            {optionalButton}
          </ScrollLink>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: {
              opacity: 0,
              x: -50,
            },
            visible: {
              opacity: 1,
              x: 10,
            },
          }}>
          <SocialMediaIcons
            socialMediaLinks={
              <>
                <Link to="https://github.com/sameeprana" target="_blank">
                  <AiFillGithub
                    className=" transition duration-200 "
                    size={35}
                  />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/monsoon-rana-92040a206/"
                  target="_blank">
                  <GrLinkedinOption size={32} />
                </Link>
                {/* <Link to="https://www.facebook.com">
                  <BsFacebook size={32} />
                </Link>
                <Link to="https://www.LinkedIn.com">
                  <AiOutlineInstagram size={35} />
                </Link> */}
                <Link to="https://twitter.com/Monsoon_rana" target="_blank">
                  <ImTwitter size={32} />
                </Link>
              </>
            }
          />
        </motion.div>
      </div>
      <motion.div
        className="image order-1 md:order-2 flex justify-center items-start basis-3/5 z-10 mt-16 py-1 w-[20rem] overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: {
            opacity: 1,
            x: 0,
          },
          visible: {
            opacity: 1,
            x: 0,
          },
        }}>
        <img
          src={userImage ? userImage : defaulUserImage}
          alt={""}
          className="rounded-full md:w-[40%] md:h-[40%] w-[60%] h-[60%] animate-[borderWave_10s_linear_infinite]"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
