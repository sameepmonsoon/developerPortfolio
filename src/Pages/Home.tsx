import image from "/src/assets/monsoon.jpg";
import Hero from "../Page Component/Hero/Hero";
import About from "../Page Component/About/About";
import HomeLayout from "../Layout/HomeLayout";
import Skills from "../Page Component/SkillsPage/SkillsPage";
import SpecialButton from "../Components/SpecialButton/SpecialButton";

import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import Projects from "./Projects";
import GetIntouch from "../Page Component/Contact/GetInTouch";
import AboutPage from "./AboutPage";

const Home = () => {
  return (
    <HomeLayout
      Children={
        <div className="snap-mandatory snap-y overflow-hidden">
          <Hero
            userImage={image}
            resumeButton={
              <a
                href="https://drive.google.com/file/d/19gIQ1Lu0I-vMNzxQiR562GoheJa7395C/view?usp=sharing"
                target="_blank">
                <SpecialButton
                  itemOne={"Resume"}
                  itemTwo={<HiOutlineClipboardDocumentList size={25} />}
                />
              </a>
            }
            optionalButton={" Say Hello"}
            optionalButtonPath={"contact"}
            userName={"Monsoon"}
            userIntroduction={
              "Hello, I'm Sameep Monsoon Rana. I love to learn and build new things.\
            "
            }
          />
          <About />
          <Skills />
          <Projects />
          <AboutPage />
          <GetIntouch />
        </div>
      }
    />
  );
};

export default Home;
