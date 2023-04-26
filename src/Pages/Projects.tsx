import { AiFillGithub } from "react-icons/ai";
import { BiLinkAlt, RxGlobe } from "react-icons/all";
import { Link } from "react-router-dom";
import Card from "../Components/Card/Card";
import ProjectsComponent from "../Page Component/Projects/ProjectsComponent";
import { motion } from "framer-motion";
import projectCardImage from "/src/assets/character_project1.svg";
import restaurant from "/src/assets/restaurant.svg";
import amazon from "/src/assets/amazon-3.svg";
import twitter from "/src/assets/twitter.svg";
import futsal from "/src/assets/futsal.svg";
import blood from "/src/assets/blood-doctors.svg";
const Projects = () => {
  return (
    <ProjectsComponent
      projectContent={
        <>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            variants={{
              hidden: {
                opacity: 0,
                x: -50,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}>
            <Card
              cardTitle={"Admin Panel for Kpop Restaurant Pvt. Ltd."}
              cardDescription={
                <p>
                  It allows restaurant managers to streamline their day-to-day
                  operations, manage table reservations, view orders, track
                  inventory, and view sales reports.
                </p>
              }
              cardImage={restaurant}
              cardLinks={
                <>
                  <Link to="https://kpop.com.np/" target="_blank">
                    <RxGlobe
                      className="transition duration-200 group-hover:animate-[spin_3s_linear_infinite]"
                      size={35}
                    />
                  </Link>
                  <Link to="https://in.kpop.com.np/" target="_blank">
                    <BiLinkAlt className="transition duration-200 " size={35} />
                  </Link>
                </>
              }
            />
          </motion.div>
          <motion.div
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
                x: 0,
              },
            }}>
            <Card
              cardTitle="Twitter Clone"
              cardDescription={
                <p>
                  This is a Twitter clone app built using the MERN stack
                  (MongoDB, Express.js, React.js, Node.js) and other
                  technologies including Tailwind CSS, TypeScript, React Router
                  DOM, React Icons, JWT verification, and features such as
                  follow, like, and explore.
                </p>
              }
              cardImage={twitter}
              cardLinks={
                <>
                  <Link
                    to="https://github.com/sameeprana/mern-twitter-clone"
                    target="_blank">
                    <AiFillGithub
                      className="transition duration-200 "
                      size={35}
                    />
                  </Link>
                  <Link
                    to="https://mern-twitter-clone.vercel.app/"
                    target="_blank">
                    <BiLinkAlt className="transition duration-200 " size={35} />
                  </Link>
                </>
              }
            />
          </motion.div>{" "}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: {
                opacity: 0,
                x: -50,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}>
            <Card
              cardTitle="Amazon Clone"
              cardDescription={
                <p>
                  This project is a full-stack web application clone of Amazon
                  with MERN (MongoDB, Express, React, Node.js) stack. The
                  application allows users to browse products, add them to the
                  cart, and purchase them with Stripe payment gateway
                  integration.
                </p>
              }
              cardImage={amazon}
              cardLinks={
                <>
                  <Link
                    to="https://github.com/sameeprana/Amazon_clone"
                    target="_blank">
                    <AiFillGithub
                      className="transition duration-200 "
                      size={35}
                    />
                  </Link>
                  <Link
                    to="https://mern-amazon-clone.vercel.app/"
                    target="_blank">
                    <BiLinkAlt className="transition duration-200 " size={35} />
                  </Link>
                </>
              }
            />
          </motion.div>{" "}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: {
                opacity: 0,
                x: -50,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}>
            <Card
              cardTitle="Futsal Booking System"
              cardDescription={
                <p>
                  Futsal Booking System is a web application based on Django
                  that allows players to book and pay for futsal courts online.
                </p>
              }
              cardImage={futsal}
              cardLinks={
                <>
                  <Link
                    to="https://github.com/sameeprana/futsal-booking-system.git"
                    target="_blank">
                    <AiFillGithub
                      className="transition duration-200 "
                      size={35}
                    />
                  </Link>
                  <Link to="https://in.kpop.com.np" target="_blank">
                    <BiLinkAlt className="transition duration-200 " size={35} />
                  </Link>
                </>
              }
            />{" "}
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
              hidden: {
                opacity: 0,
                x: -50,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}>
            <Card
              cardTitle="Blood Donation Portal"
              cardDescription={
                <p>
                  Blood Donation Project is a web-based system build for
                  donating blood. It works along with NGOs and helps to spread
                  awareness about blood donation.
                </p>
              }
              cardImage={blood}
              cardLinks={
                <>
                  <Link
                    to="https://github.com/sameeprana/blood-donation.git"
                    target="_blank">
                    <AiFillGithub
                      className="transition duration-200 "
                      size={35}
                    />
                  </Link>
                  <Link
                    to="https://github.com/sameeprana/blood-donation.git"
                    target="_blank">
                    <BiLinkAlt className="transition duration-200 " size={35} />
                  </Link>
                </>
              }
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            variants={{
              hidden: {
                opacity: 0,
                x: -50,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}>
            <Card
              cardTitle="Side Projects"
              cardDescription={
                <p>
                  Some of the completed projects include Gaming website
                  template,Login authenticator, Product page, Redux page etc.
                  I'm constantly working on new projects, so be sure to check
                  back often for updates.
                </p>
              }
              cardImage={projectCardImage}
              cardLinks={
                <>
                  <Link
                    to="https://github.com/sameeprana?tab=repositories"
                    target="_blank">
                    <AiFillGithub
                      className="transition duration-200 "
                      size={35}
                    />
                  </Link>
                  <Link
                    to="https://github.com/sameeprana?tab=repositories"
                    target="_blank">
                    <BiLinkAlt className="transition duration-200 " size={35} />
                  </Link>
                </>
              }
            />
          </motion.div>
        </>
      }
    />
  );
};

export default Projects;
