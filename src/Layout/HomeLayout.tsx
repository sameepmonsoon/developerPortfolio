import React, { useEffect, useState } from "react";
import Footer from "../Page Component/Home/Footer/Footer";
import Navbar from "../Page Component/Home/Navbar/Navbar";
import { FaHandPointUp } from "react-icons/fa";
import image from "../../src/assets/superman.svg";
import { TbArrowBigUpLinesFilled } from "react-icons/tb";
type HomeTypes = {
  Children: React.ReactElement;
};
const HomeLayout = (props: HomeTypes) => {
  const { Children } = props;
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const NavLinkNames = [
    { label: "Home", link: "home" },
    { label: "skills", link: "skill" },

    { label: "projects", link: "projects" },
    { label: "About", link: "about" },
    { label: "contact", link: "contact" },
  ];
  const scrollToSkills = () => {
    const skillsSection = document.getElementById("skills");
    skillsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTopBtn: HTMLElement = document.getElementById(
    "scroll-to-top"
  ) as HTMLElement;

  window.addEventListener("scroll", () => {
    if (scrollToTopBtn !== null) {
      if (window.pageYOffset > 400) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    }
  });

  return (
    <div
      className="flex flex-col overflow-hidden dark:bg-deep-blue bg-white  snap-proximity scroll-smooth font-playfair"
      id="home">
      <div className="order-1 z-[10]">
        <Navbar LinkName={NavLinkNames} scrollToSkills={scrollToSkills} />
      </div>
      <div className="order-2 z-[0] mt-[4rem] snap-start overflow-hidden">
        {Children}
      </div>
      <div className="order-3 snap-start">
        <Footer footerText={"@2023 By Monsoon"} />
      </div>
      <div
        id="scroll-to-top"
        style={{ display: "none" }}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="group z-[20] fixed bottom-[1rem] right-5 text-deep-blue cursor-pointer h-[3rem] bg-gray-900 w-[2.4rem] flex justify-center items-center  rounded-lg">
        <FaHandPointUp
          size={24}
          id="scroll-to-top"
          className="relative top-[0.6rem] left-[0.4rem] text-white"
        />
        {/* <RxDoubleArrowDown size={40} id="scroll-to-top" onClick={() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
          }}/> */}
      </div>
    </div>
  );
};

export default HomeLayout;
