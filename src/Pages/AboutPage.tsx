import React, { useRef } from "react";
import HomeLayout from "../Layout/HomeLayout";
import { useScroll, motion } from "framer-motion";
import { FaLaptopCode, FaSchool, FaUniversity } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { TbCertificate } from "react-icons/tb";
import aboutImage from "../assets/monsoon.jpg";
const AboutPage = () => {
  return (
    // <HomeLayout
    //   Children={
    <div id="about" className="pt-1">
      <p className="h-[4rem] w-full relative py-20 sm:py-10 flex justify-center items-center px-10 lg:top-5 top-14 sm:top-10  text-deep-blue dark:text-white">
        <span className="capitalize text-4xl font-[600]">about me</span>
      </p>
      <motion.div
        className="flex flex-row min-h-[300px] w-full items-center justify-center px-5 gap-x-10 text-deep-blue dark:text-white md:text-xl text-base font-[400] overflow-hidden py-10 lg:mt-0 lg:py-[1rem]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },
          visible: {
            opacity: 1,

            y: 0,
          },
        }}>
        <img
          src={aboutImage}
          className="w-[14rem] object-cover h-[14rem] p-0 rounded-[12px] cursor-pointer hover:border-gray-400 dark:hover:border-white/40 "
        />
      </motion.div>
      <p className="dark:text-white text-deep-blue flex flex-col items-center justify-center font-[fantasy,sans] font-[1000] min-h-[5rem] md:text-start whitespace-norap capitalize h-max-[25rem] md:h-auto md:max-h-[7rem] overflow-hidden w-full">
        <span className="text-[3rem] sm:text-[4rem] italic text-center font-[fantasy,sans] font-[1000] whitespace-rap capitalize ">
          Sameep Monsoon Rana
        </span>
      </p>
      <motion.div
        className="flex flex-row  min-h-[150px] w-full items-center justify-center px-5 gap-x-10 text-deep-blue dark:text-white md:text-xl text-base font-[400] overflow-hidden py-10 lg:mt-0 lg:py-[1rem]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        // transition={{ type: "spring", bounce: 0.8, duration: 3 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },
          visible: {
            opacity: 1,

            y: 0,
          },
        }}>
        <span className="w-[60rem] border-[1px] border-gray-300 dark:border-white/30 p-5 rounded-[10px] cursor-pointer hover:border-gray-400 dark:hover:border-white/40">
          I am an aspiring full-stack developer with experience in JavaScript,
          React and related libraries. My passion lies in creating engaging,
          responsive user interfaces that enhance the overall user experience. I
          have an avid interest in mobile application development, and I'm
          constantly seeking opportunities to expand my skillset and knowledge.
        </span>
      </motion.div>
      <div
        className="
        flex flex-col lg:flex-row w-full h-full py-0  justify-center items-center md:gap-[6rem]">
        <div className="flex flex-col justify-center items-center gap-y-10 py-10 h-screen">
          <motion.div
            className="flex flex-row h-[35px] text-deep-blue dark:text-white md:h-[50px] w-[20rem] md:w-[40rem] items-center justify-center px-5 text-[2rem] md:text-[3rem] font-[fantasy,sans] font-[500]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },
              visible: {
                opacity: 1,

                y: 0,
              },
            }}>
            Education
          </motion.div>
          <div className="flex flex-col gap-y-10">
            <motion.div
              className="flex flex-col md:flex-row min-h-[100px] text-deep-blue dark:text-white md:h-[150px] w-[40rem] items-center md:items-start justify-start px-5 gap-x-10 gap-y-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,

                  y: 0,
                },
              }}>
              <span className="group w-[120px] h-[80px] hover:border-gray-400 dark:hover:border-white/40  cursor-pointer rounded-[10px] flex flex-row justify-center items-center border-[1px] border-gray-300 dark:border-white/30">
                <IoSchoolSharp size={45} className="group-hover:" />
              </span>
              <span>
                <p className="text-xl font-semibold">
                  Trubhuvan University | 2018 - Present
                </p>
                <p className="text-[17px] font-[400]">
                  Bachelor of Information Management
                  <br /> Asian School of Management and Technology
                </p>
              </span>
            </motion.div>

            <motion.div
              className="flex flex-col md:flex-row text-deep-blue dark:text-white min-h-[100px] md:h-[150px] w-[40rem] items-center md:items-start justify-start px-5 gap-x-10 gap-y-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              // transition={{ type: "spring", bounce: 0.8, duration: 3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,

                  y: 0,
                },
              }}>
              <span className="group w-[120px] h-[80px] hover:border-gray-400 dark:hover:border-white/40  cursor-pointer rounded-[10px] flex flex-row justify-center items-center border-[1px] border-gray-300 dark:border-white/30">
                <FaSchool size={45} />
              </span>
              <span>
                <p className="text-xl font-semibold">
                  Higher Secondary School | 2016 - 2018
                </p>
                <p className="text-[17px] font-[400]">
                  +2 Science <br /> Shree Chhorepatan Higher Seconday School
                </p>
              </span>
            </motion.div>
            <motion.div
              className="flex flex-col md:flex-row text-deep-blue dark:text-white min-h-[100px] md:h-[150px] w-[40rem] items-center md:items-start justify-start px-5 gap-x-10 gap-y-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,

                  y: 0,
                },
              }}>
              <span className="group w-[120px] h-[80px] hover:border-gray-400 dark:hover:border-white/40  cursor-pointer rounded-[10px] flex flex-row justify-center items-center border-[1px] border-gray-300 dark:border-white/30">
                <TbCertificate size={45} />
              </span>
              <span className="w-auto">
                <p className="text-xl font-semibold">
                  Secondary School | 2015 - 2016
                </p>
                <p className="text-[17px] font-[400]">
                  SEE <br /> Shree Rajasthal Higher Seconday School
                </p>
              </span>
            </motion.div>
          </div>
        </div>{" "}
        {/* <span className=" lg:h-[32rem] h-[1px] lg:w-[1px] w-full bg-gray-300"></span> */}
        <div className="flex py-[3.6rem] flex-col justify-start items-center gap-y-12 sm:gap-y-11 h-auto lg:h-screen">
          <motion.div
            className="flex flex-row h-[35px] text-deep-blue dark:text-white md:h-[50px] w-[20rem] md:w-[40rem] items-center justify-center px-5 text-[2rem] md:text-[3rem] font-[fantasy,sans] font-[500]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },
              visible: {
                opacity: 1,

                y: 0,
              },
            }}>
            Experience
          </motion.div>
          <motion.div
            className="flex flex-col md:flex-row min-h-[100px] text-deep-blue dark:text-white md:min-h-[150px] w-[40rem] items-center md:items-start justify-start px-5 gap-x-10 h-full gap-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },
              visible: {
                opacity: 1,

                y: 0,
              },
            }}>
            <span className="group min-w-[120px] h-[80px] hover:border-gray-400 cursor-pointer rounded-[10px] flex flex-row justify-center items-center border-[1px] border-gray-300 dark:border-white/30 dark:hover:border-white/40 ">
              <FaLaptopCode size={45} className="group-hover:" />
            </span>
            <span className="w-3/5 sm:w-3/4 md:w-full">
              <p className="text-xl font-semibold ">Frontend Development</p>
              <p className="text-[17px] font-[400]">
                As a React Developer for
                <a
                  href="https://crupeesoft.com"
                  target="_blank"
                  className="underline italic text-blue">
                  Crupee Software Pvt. Ltd.
                </a>
                , I built an admin panel for a restaurant using various npm
                packages, and gained familiarity with cPanel and Node.js. I have
                also been actively involved in a Next.js side project, which has
                allowed me to expand my skills and stay up-to-date with the
                latest web development technologies.
              </p>
            </span>
          </motion.div>
        </div>
      </div>
    </div>
    //   }
    // />
  );
};

export default AboutPage;
