import { FC, useState, useEffect, useContext } from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { motion } from "motion/react";
import first from "../../assets/images/images/five.jpg";
import second from "../../assets/images/images/seconnd.jpg";
// import third from "../assets/images/images/third.jpg";
import four from "../../assets/images/images/four.jpg";
// import five from "../assets/images/images/five.jpg";
// import sixth from "../assets/images/images/sixt.jpg";
import nine from "../../assets/images/images/nine.jpg";
// import eleven from "../assets/images/images/eleven.jpg";
// import twelve from "../assets/images/images/twelve.jpg";
import thirteen from "../../assets/images/images/thirteen.jpg";
// import fourteen from "../assets/images/images/fourteen.jpg";
// import fifteen from "../assets/images/images/fifteen.jpg";
import { Context } from "../../context/ContextProvider";
import ScrollToTop from "./ScrollToTop";
interface GuestGuardLayoutProps {
  children?: React.ReactNode;
}

const GuestGuardLayout: FC<GuestGuardLayoutProps> = ({ children }) => {
  const context = useContext(Context);

  if (!context) {
    throw new Error("Nav must be used within a ContextProvider");
  }

  const { isOpen } = context;
  const [isLoading, setIsLoading] = useState(true);
  const [loadingtime, setLoadingTime] = useState(25);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const loadingTimer = setInterval(
      () => setLoadingTime((prev) => (prev <= 97 ? prev + 3 : prev)),
      90
    );
    return () => clearInterval(loadingTimer);
  }, []);

  if (isLoading) {
    return (
      <motion.div
        initial={{ height: "100vh", opacity: 1 }}
        animate={{ opacity: 0, height: "0vh" }}
        style={{ transformOrigin: "top left" }}
        transition={{ duration: 0.9, delay: 4 }}
        className=" w-screen flex items-center justify-center bg-black relative overflow-hidden px-3"
      >
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ x: 120, opacity: 1, rotate: 18 }}
          transition={{ duration: 0.62, ease: "easeInOut", delay: 1.4 }}
          className="w-[130px] h-[220px] md:w-[320px] md:h-[420px] bg-blue-200 transform  absolute z-40"
        >
          <img src={first} alt="men at work" className="w-full h-full" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ x: 220, opacity: 1, rotate: 29 }}
          transition={{ duration: 0.62, ease: "easeInOut", delay: 1.8 }}
          className=" w-[130px] h-[220px] md:w-[320px] md:h-[420px] bg-black transform  absolute z-50 flex items-center  justify-center"
        >
          <img src={four} alt="working tools" className="w-full h-full" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, rotate: 5 }}
          transition={{ duration: 0.62, ease: "easeInOut", delay: 1 }}
          className="w-[130px] h-[220px] md:w-[320px] md:h-[420px] bg-red-300 absolute  z-30"
        >
          <img src={second} alt="working tools" className="w-full h-full" />{" "}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ x: -120, opacity: 1, rotate: -8 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.9 }}
          className="w-[130px] h-[220px] md:w-[320px] md:h-[420px] bg-green-300  absolute z-20"
        >
          <img src={nine} alt="working tools" className="w-full h-full" />{" "}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ x: -190, opacity: 1, rotate: -30 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="w-[130px] h-[220px]  md:w-[320px] md:h-[420px] bg-blue-300  absolute z-10"
        >
          <img src={thirteen} alt="working tools" className="w-full h-full" />{" "}
        </motion.div>
        <div className="flex flex-col gap-3 absolute bottom-2 w-full justify-center items-center">
          <div
            style={{ width: `${loadingtime}%` }}
            className={` bg-white h-2 absolute bottom-0`}
          ></div>
          <div className="absolute flex items-center justify-center w-20 h-20 text-xl italic bg-white rounded-full bottom-4">
            {loadingtime}%
          </div>
        </div>
      </motion.div>
    ); // Replace with a spinner or loading indicator
  }

  return (
    <div className={` ${isOpen ? " h-screen top-0 z-0" : "static"}`}>
      <ScrollToTop />
      <Nav />
      {children ? children : <Outlet />}
      <Footer />
    </div>
  );
};

export default GuestGuardLayout;
