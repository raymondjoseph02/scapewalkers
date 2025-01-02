import { FaUser } from "react-icons/fa6";
import logo1 from "../../assets/images/images/logo1.jpg";
import logo2 from "../../assets/images/images/logo2.jpg";
import logo3 from "../../assets/images/images/logo3.jpeg";
import logo4 from "../../assets/images/images/logo4.jpg";
import logo5 from "../../assets/images/images/logo5.jpg";
import { motion } from "motion/react";
import PrimaryButton from "../global_ui/PrimaryButton";
const whatMakeUsStandOut = [
  {
    title: "Client-Centered Solutions",
    description:
      "Your vision is our priority. We work closely with you to deliver designs that resonate with your unique style and needs.",
  },
  {
    title: "Innovative Designs",
    description:
      "Our creative team ensures every project stands out, blending functionality with aesthetic appeal.",
  },
  {
    title: "Exceptional Quality",
    description:
      "We use the finest materials and the latest technology to bring your ideas to life with impeccable quality.",
  },
  {
    title: "Timely Delivery",
    description:
      "          We value your time and ensure every project is delivered on schedule without compromising quality.",
  },
];
interface CardProps {
  title: string;
  description: string;
}
const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="flex gap-3 px-5 shadow-lg py-7 bg-white_100">
      <div className="p-3 bg-[#F0F4FE] rounded-full w-fit h-fit">
        <FaUser className="text-[#4775F5]" />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-[#62636C] ">{description}</p>
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
              At Scapewalkers, we deliver exceptional designs tailored to your
              needs. With a focus on innovation, style, and client satisfaction,
              we transform ideas into reality.
            </p>
            <div>
              <PrimaryButton />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {whatMakeUsStandOut.map((standOut) => (
              <motion.div
                initial={{ x: 20 }}
                whileInView={{ x: 0 }}
                viewport={{ amount: 0.3 }}
              >
                <Card
                  title={standOut.title}
                  description={standOut.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex lg:justify-between items-center md:w-[80%] lg:px-0 px-5 mx-auto bg-[#f8f8f8] flex-wrap">
          <div className="w-[100px] h-[90px]">
            <img src={logo1} alt="" className="h-full" />
          </div>
          <div className="w-[120px] h-[90px]">
            <img src={logo2} alt="" className="h-full" />
          </div>
          <div className="w-[120px] h-[90px]">
            <img src={logo3} alt="" className="h-full" />
          </div>
          <div className="w-[90px] h-[90px] rounded-full overflow-hidden">
            <img
              src={logo4}
              alt=""
              className="object-cover h-full rounded-full aspect-video"
            />
          </div>
          <div className="w-[90px] h-[90px] rounded-full overflow-hidden">
            <img
              src={logo5}
              alt=""
              className="object-cover h-full rounded-full aspect-video"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatDriveUs;
