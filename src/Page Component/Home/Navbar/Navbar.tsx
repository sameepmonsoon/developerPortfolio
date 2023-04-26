import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../Components/LogoContainer/Logo";
import ToggleButton from "../../../Components/ToggleButton/ToggleButton";
import { RiMenuLine, IoCloseSharp } from "react-icons/all";
import { Link as ScrollLink } from "react-scroll";

type NavLinks = {
  LinkName: Array<any>;
  scrollToSkills: () => void;
};

const Navbar = (props: NavLinks) => {
  const { LinkName } = props;
  const [nav, setNav] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <div
      className={` z-[10] border-b-[1px] dark:border-b-white/20 bg-b-[0px 1px 2px fixed rgba(0, 0, 0, 0.1)] h-[58px] w-[100vw] flex font-bold flex-row px-[2rem] items-center justify-center bg-white ${
        !visible
          ? "-translate-y-[102%]  transition-translate ease-in-out duration-[400ms]"
          : "translate-y-0  transition-translate ease-in-out duration-[400ms]"
      }`}>
      <Logo />
      <div className=" flex h-[100%] flex-row flex-1 justify-end items-center gap-5 text-[15px] text-deep-blue font-[600] font-sans">
        <div className="hidden relative uppercase md:flex  justify-center items-center gap-1">
          {LinkName.map((name, index) => (
            <ScrollLink
              smooth={true}
              duration={500}
              key={index}
              to={name.link}
              className={`px-4 cursor-pointer
              hover:bg-deep-blue/10  hover:text-deep-blue h-10 flex justify-center items-center rounded-[4px] 
              //
                              // If the name.link has an extra whitespace, it won't retain the selected link. -- bg-color

                // location.pathname == name.link &&
                // "bg-deep-blue/10  text-deep-blue"
              // }`
            }
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
                props.scrollToSkills;
              }}>
              {name.label}
            </ScrollLink>
          ))}

          <ToggleButton />
        </div>
      </div>
      <div className="flex md:hidden text-deep-blue cursor-pointer items-center justify-center select-none">
        <span>
          <ToggleButton />
        </span>
        <span onClick={handleNav}>
          {nav ? <IoCloseSharp size={27} /> : <RiMenuLine size={27} />}
        </span>
      </div>
      <div
        className={
          nav
            ? "fixed  md:hidden left-0 top-[3.7rem] transition-left ease-in-out duration-[600ms] flex flex-col justify-start items-start border-b-[1px] border-b-white/20 min-w-full h-[15rem] bg-white dark:bg-deep-blue text-deep-blue  dark:text-white pl-5 pt-1 gap-3 uppercase overflow-hidden"
            : "fixed md:hidden left-0 top-[-30rem] transition-left ease-in-out duration-[1000ms] flex flex-col justify-start items-start  min-w-full h-[20rem] bg-white dark:bg-deep-blue text-deep-blue  dark:text-white pl-5 pt-1 gap-3 uppercase overflow-hidden"
        }>
        {/* <Logo otherSection={true} /> */}
        {LinkName.map((name, index) => (
          <ScrollLink
            smooth={true}
            duration={500}
            key={index}
            to={name.link}
            className={`pt-[0px] max-w-[150px] w-[100px] h-[2rem] flex flex-row justify-start items-center border-b-[rgba(255,255,255,0.9)] text-[17px]  pl-1 hover:bg-dark-grey/20 rounded-[1px] ${
              location.pathname == name.link && "bg-dark-grey/20"
            }`}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              handleNav();
            }}>
            {name.label}
          </ScrollLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
