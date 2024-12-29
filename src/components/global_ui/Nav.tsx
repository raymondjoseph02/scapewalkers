import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";
import scapewalkerLogoDark from "../../assets/images/png/scape_logo_dark_bg.png";
import scapewalkerLogoDarkMobile from "../../assets/images/png/scape_logo_dark_bg _mobile.png";
import { motion } from "framer-motion";
import { useLottie } from "lottie-react";
import lottieHanburger from "../../assets/images/svg/hanburger.json";
import { Context } from "../../context/ContextProvider";

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Lottie options
  const options = {
    animationData: lottieHanburger,
    loop: false,
    autoplay: false,
  };
  const { View, playSegments, animationItem } = useLottie(options);

  // Get context values
  const context = useContext(Context);

  if (!context) {
    throw new Error("Nav must be used within a ContextProvider");
  }

  const { isOpen, setIsOpen, servicesRef, setIsServiceInView } = context;

  useEffect(() => {
    if (animationItem) {
      animationItem.setSpeed(5);
    }
  }, [animationItem]);

  const handleHanburger = () => {
    if (animationItem && setIsOpen) {
      if (isOpen) {
        playSegments([60, 200], true);
      } else {
        playSegments([0, 60], true);
      }
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    if (isOpen === true) {
      setIsOpen(false);
      playSegments([60, 200], true);
    }
  }, [location.pathname]);

  const handleScollToView = () => {
    if (location.pathname == "/") {
      console.log(servicesRef.current);
      servicesRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      setIsServiceInView(true);

      navigate("/");
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.65, ease: "easeInOut", duration: 0.54 }}
      className="py-4 bg-black"
    >
      <nav className="flex justify-between items-center w-full px-5 md:px-0 md:w-[80%] mx-auto">
        <div className="flex items-center justify-between w-full">
          {/* Logo for Desktop */}
          <div className="hidden md:flex">
            <Link to="/">
              <img src={scapewalkerLogoDark} alt="Logo" className="w-[220px]" />
            </Link>
          </div>

          {/* Logo for Mobile */}
          <div className="flex md:hidden">
            <Link to="/">
              <img
                src={scapewalkerLogoDarkMobile}
                alt="Logo Mobile"
                className="w-[60px] aspect-video"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden text-white xl:flex">
            <ul className="flex items-center justify-between gap-10">
              <li>
                <Link
                  to="/"
                  className={`text-md font-normal capitalize ${
                    location.pathname === "/"
                      ? "text-white hover:text-blue-100"
                      : "text-white/80 hover:text-white/50"
                  }`}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about-us"
                  className={`text-md font-normal capitalize ${
                    location.pathname === "/about"
                      ? "text-white hover:text-blue-100"
                      : "text-white/80 hover:text-white/50"
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className={`text-md font-normal capitalize ${
                    location.pathname === "/profolio"
                      ? "text-white hover:text-blue-100"
                      : "text-white/80 hover:text-white/50"
                  }`}
                >
                  Our Profolio
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact-us"}
                  className="font-normal capitalize text-md text-white/90 hover:text-white/50"
                >
                  contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-8">
            <div className="hidden sm:flex">
              <PrimaryButton></PrimaryButton>
            </div>

            {/* Hamburger Menu */}
            <div
              onClick={handleHanburger}
              className={`flex ${
                isOpen
                  ? "fixed top-4  right-5 sm:right-[5%] md:top-6 z-40 md:right-[10%]"
                  : "relative"
              } flex-col xl:hidden gap-1 justify-end items-end`}
            >
              <div className="z-40 w-10 bg-white">{View}</div>
            </div>

            <motion.div
              initial={{ right: "-100%" }}
              animate={{ right: isOpen ? "0" : "-100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed top-0 z-30 flex flex-col justify-between w-full md:w-[50vw] h-screen px-5 pt-20 pb-4 text-white bg-black"
            >
              <div className="flex flex-col justify-between gap-7">
                <ul className="flex flex-col justify-between gap-5">
                  <Link to="/" className="font-normal capitalize text-md ">
                    <li className="hover:bg-gray-100 hover:text-[#2758a5] px-2 py-3">
                      Home
                    </li>
                  </Link>
                  <Link
                    to="/about-us"
                    className="font-normal capitalize text-md "
                  >
                    <li className="hover:bg-gray-100 hover:text-[#2758a5] px-2 py-3">
                      about us
                    </li>
                  </Link>
                  <Link
                    to="/gallery"
                    className="font-normal capitalize text-md "
                  >
                    <li className="hover:bg-gray-100 hover:text-[#2758a5] px-2 py-3">
                      our portfolio
                    </li>
                  </Link>{" "}
                  <Link
                    to="/contact-us"
                    className="font-normal capitalize text-md "
                  >
                    <li className="hover:bg-gray-100 hover:text-[#2758a5] px-2 py-3">
                      contact us
                    </li>
                  </Link>
                </ul>
                <div className="md:hidden">
                  {" "}
                  <PrimaryButton />
                </div>{" "}
              </div>

              <div className="text-center text-white_100/50">
                &copy;copyright 2024 scapewalkers. All rights reserved
              </div>
            </motion.div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Nav;
