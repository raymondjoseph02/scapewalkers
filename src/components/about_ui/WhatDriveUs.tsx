import { FaUser } from "react-icons/fa6";
import nnpc_logo from "../../assets/images/jpg/nnpc_logo.jpeg";
import adc_logo from "../../assets/images/jpg/adc-logo.jpg";
import moreno_logo from "../../assets/images/jpg/moreno.png";
import cbn_logo from "../../assets/images/jpg/cbn_logo.jpeg";
import { motion } from "motion/react";
import PrimaryButton from "../global_ui/PrimaryButton";
const Card = () => {
  return (
    <div className="flex gap-3 px-5 shadow-lg py-7 bg-white_100">
      <div className="p-3 bg-[#F0F4FE] rounded-full w-fit h-fit">
        <FaUser className="text-[#4775F5]" />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-lg font-semibold">Client-Centered Solutions</p>
        <p className="text-[#62636C] ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad fuga sed
          necessitatibus nostrum non!
        </p>
      </div>
    </div>
  );
};
const WhatDriveUs = () => {
  return (
    <section className="py-20 bg-[#f8f8f8]">
      <div className="flex flex-col gap-20">
        <div className="md:w-[80%] mx-auto  flex  md:px-0 px-5 justify-between gap-8 xl:items-center xl:flex-row flex-col">
          <div className="lg:w-[60%] flex-col flex gap-4">
            <h3 className="text-lg font-semibold md:text-3xl">
              why choose <span className="text-[#4775F5]">ScapeWalkers</span>?
            </h3>
            <p className="font-normal text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et,
              laborum consectetur voluptatem quis accusantium. Veniam repellat
              eveniet illum porro nostrum dolores dolorum voluptates ducimus ab.
            </p>
            <div>
              <PrimaryButton />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <motion.div
              initial={{ x: 20 }}
              whileInView={{ x: 0 }}
              viewport={{ amount: 0.3 }}
            >
              <Card />
            </motion.div>
            <motion.div
              initial={{ x: 20 }}
              whileInView={{ x: 0 }}
              viewport={{ amount: 0.3 }}
            >
              <Card />
            </motion.div>
            <motion.div
              initial={{ x: 20 }}
              whileInView={{ x: 0 }}
              viewport={{ amount: 0.3 }}
            >
              <Card />
            </motion.div>
            <motion.div
              initial={{ x: 20 }}
              whileInView={{ x: 0 }}
              viewport={{ amount: 0.3 }}
            >
              <Card />
            </motion.div>
          </div>
        </div>
        <div className="flex lg:justify-between items-center md:w-[80%] lg:px-0 px-5 mx-auto bg-[#f8f8f8] flex-wrap">
          <div className="w-[100px] h-[90px]">
            <img src={cbn_logo} alt="" className="h-full" />
          </div>
          <div className="w-[120px] h-[90px]">
            <img src={nnpc_logo} alt="" className="h-full" />
          </div>
          <div className="w-[120px] h-[90px]">
            <img src={moreno_logo} alt="" className="h-full" />
          </div>
          <div className="w-[120px] h-[90px]">
            <img src={adc_logo} alt="" className="h-full" />
          </div>
          <div className="w-[120px] h-[90px]">
            <img src={nnpc_logo} alt="" className="h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatDriveUs;
