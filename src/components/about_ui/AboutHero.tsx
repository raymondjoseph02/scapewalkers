import { motion } from "motion/react";
import PrimaryButton from "../global_ui/PrimaryButton";
function AboutHero() {
  return (
    <div className="text-white_100  bg-aboutBg  md:px-0  bg-no-repeat bg-center bg-cover mx-auto  flex items-center  h-[50vh] py-20 relative">
      <div className="absolute w-full h-full bg-gradient-to-br from-[#00000055] to-[#413f3f4e] "></div>

      <div className="flex  md:w-[80%] mx-auto gap-5 px-5 h-full flex-col  relative  justify-end">
        <motion.h2
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          style={{ transformOrigin: "right" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className=" text-xl md:text-3xl lg:text-5xl font-semibold lg:w-[20ch] leading-[1.3] md:w-[30ch] w-[25ch]"
        >
          Making great design accessible and delightful for everyone since 2008.
        </motion.h2>
        <div className="">
          <PrimaryButton dark={false} />
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
