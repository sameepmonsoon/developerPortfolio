import React from "react";
import HoverCard from "../../Components/HoverCard/HoverCard";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="h-20 w-full relative lg:top-[8rem] flex justify-center items-center px-10 text-deep-blue dark:text-white">
        <span className="capitalize text-4xl font-[600]">what i do</span>
      </p>
      <div
        id="skill"
        className="md:px-10 flex lg:flex-row flex-col items-center gap-10 justify-start md:justify-around flex-2 lg:h-screen snap-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3 }}
          variants={{
            hidden: {
              opacity: 0.9,
              y: 70,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}>
          <HoverCard
            otherSection={true}
            hoverTransitionTitle="Frontend development"
            subTitle="frontend development"
            // color="#FDCC49"
            progressBar={
              <p>
                <span>
                  I prefer to build things from the ground up, bringing ideas to
                  life through code.
                </span>
                <br />
                <br />
                <span>
                  I specialize in Javascript and React, with expertise in core
                  concepts like component-based architecture and state
                  management.
                </span>
              </p>
            }
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3 }}
          variants={{
            hidden: {
              opacity: 0.9,
              y: 70,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}>
          <HoverCard
            otherSection={true}
            hoverTransitionTitle="Designing & backend"
            subTitle="Designing & backend"
            // color="#2CBCE9"
            progressBar={
              <p>
                <span>
                  I enjoy creating simple and clean design patterns that are
                  combined with thoughtful interactions to create a memorable
                  user experience.
                </span>
                <br />
                <br />
                <span>
                  UI / UX, Web Apps.
                  <br /> Learning and developing my skills in Figma and MERN
                  Stack is my ongoing goal.
                </span>
              </p>
            }
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
