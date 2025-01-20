import PrimaryButton from "../global_ui/PrimaryButton";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import banner_3 from "../../assets/images/images/banner3.jpg";
const HeroSection = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(true);
    }, 500);
  }, []);
  return (
    <section
      style={{
        backgroundImage: `url(${banner_3})`,
      }}
      className="  h-[60vh]  relative 2xl:bg-none bg-cover bg-center bg-no-repeat flex items-center justify-center "
    >
      <div className="absolute w-full h-full bg-gradient-to-tl from-[#0000005e] to-[#000000]"></div>
      <div className="relative md:w-[80%] w-full px-5 md:px-0 flex items-center flex-col justify-center gap-5 text-center ">
        <motion.h1
          initial={{
            scale: 1.1,
            y: 30,
            opacity: 0,
          }}
          animate={
            startAnimation
              ? {
                  scale: 1,
                  y: 0,
                  opacity: 1,
                }
              : {
                  scale: 0,
                  y: 30,
                  opacity: 0,
                }
          }
          transition={{ duration: 0.75, ease: "easeInOut" }}
          className="text-white relative z-20 text-3xl md:text-6xl text-wrap md:w-[20ch] capitalize font-semibold leading-[109%]"
        >
          explore architectural excellence with us!
        </motion.h1>
        <motion.p
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={
            startAnimation
              ? {
                  y: 0,
                  opacity: 1,
                }
              : {
                  y: 20,
                  opacity: 0,
                }
          }
          transition={{ duration: 0.75, delay: 0.25, ease: "easeInOut" }}
          className="text-white_50 relative z-20 text-wrap md:w-[38ch]  text-lg font-medium  tracking-wide"
        >
          Discover insipired architectural solutions Tailored to your unique
          styles and needs
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
            y: "20px",
          }}
          animate={
            startAnimation
              ? {
                  y: 0,
                  opacity: 1,
                }
              : {
                  y: 20,
                  opacity: 0,
                }
          }
          className="relative z-20 pt-3"
        >
          <PrimaryButton dark={false} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
