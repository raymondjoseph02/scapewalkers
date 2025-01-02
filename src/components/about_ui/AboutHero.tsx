import { motion } from "motion/react";
function AboutHero() {
  return (
    <div className="text-white_100  bg-aboutBg  md:px-0 px-5 bg-no-repeat bg-center bg-cover mx-auto  flex items-center  h-[50vh] py-20 relative">
      <div className="absolute w-full h-full bg-gradient-to-br from-[#00000055] to-[#413f3f4e] "></div>

      <div className="flex justify-between w-[80%] mx-auto items-end h-full  relative">
        <motion.h2
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          style={{ transformOrigin: "right" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className=" text-3xl lg:text-5xl font-semibold lg:w-[20ch] leading-[1.3] relative"
        >
          Making great design accessible and delightful for everyone since 2008.
          {/* <motion.p className="absolute w-full bg-red-200 top-0 bottom-0">
            {" "}
          </motion.p> */}
        </motion.h2>
        {/* <div className="">
          {" "}
          <PrimaryButton />
        </div> */}
      </div>
    </div>
  );
}

export default AboutHero;
