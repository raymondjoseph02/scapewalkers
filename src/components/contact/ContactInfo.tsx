import { FC, useState } from "react";
import { FaEnvelope } from "react-icons/fa6";
import { motion } from "framer-motion";
import PrimaryButton from "../global_ui/PrimaryButton";
interface ContactBlockProps {
  title: string;
  email: string;
  span: number;
}
const ContactBlock: FC<ContactBlockProps> = ({ title, email, span }) => (
  <div
    className={`flex w-full gap-3 p-3 bg-[#ffffff] col-span-[${span}] rounded-lg shadow-md lg:basis-[45%] xl:basis-1/4 `}
  >
    <div>
      <FaEnvelope />
    </div>
    <div>
      <p className="font-bold capitalize">{title}</p>
      <p className="">{email}</p>
    </div>
  </div>
);

const ContactInfo = () => {
  const [isAppointment, setIsAppointment] = useState(true);

  const contactDetails = {
    lagos: [
      { title: "Email", content: "(+234) 803-4501-052" },
      { title: "Phone", content: "{+234} 8027197229" },
      {
        title: "address",
        content:
          "Plot 26, Abiodun Ojo street New Era Estate, Parafa- Ikorodu, Lagos",
      },
    ],
    abuja: [
      { title: "Email", content: "scapeWalkers@abuja.com" },
      { title: "Phone", content: "{+234} 8027197229" },
      {
        title: "address",
        content:
          "Plot 358A, G/Daya estate Karshi express way, Karshi district- Abuja, FCT",
      },
    ],
  };

  return (
    <section className="relative pt-[360px]  md:pt-[320px] lg:pt-[180px] xl:pt-[270px] pb-10 md:pb-20 contact-info bg-black">
      <div className="flex flex-col-reverse gap-5 py-20 absolute top-[-150px] xl:w-[60%] left-[50%] w-full transform translate-x-[-50%]">
        <div className="flex justify-center p-2 bg-[#d7d9da74] rounded-full gap-3 w-fit mx-auto ">
          <p
            onClick={() => setIsAppointment(false)}
            className={`capitalize cursor-pointer font-semibold p-3 transition-all duration-75 ease-in-out ${
              !isAppointment
                ? "bg-white rounded-full text-black/70 shadow-md shadow-[#302e2e]"
                : ""
            }`}
          >
            Lagos Office
          </p>
          <p
            onClick={() => setIsAppointment(true)}
            className={`capitalize cursor-pointer font-semibold p-3 transition-all duration-75 ease-in-out ${
              isAppointment
                ? "bg-white rounded-full shadow-md shadow-[#302e2e] text-black/70 "
                : ""
            }`}
          >
            Abuja Office
          </p>
        </div>

        {/* Lagos Office */}
        <motion.div
          initial={{ opacity: 0, x: "100px" }}
          animate={{
            opacity: isAppointment ? 0 : 1,
            x: isAppointment ? "-100px" : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`${
            isAppointment ? "hidden" : "grid"
          }  bg-[rgba(255,255,255,0.7)] md:grid-cols-2 align-middle justify-center backdrop-blur-xl  w-full flex-wrap gap-3 lg:justify-between items-center mx-auto p-5 rounded-lg`}
        >
          {contactDetails.lagos.map((contact, index) => (
            <ContactBlock
              key={index}
              title={contact.title}
              email={contact.content}
              span={index == 2 ? 2 : 1}
            />
          ))}
        </motion.div>

        {/* Abuja Office */}
        <motion.div
          initial={{ opacity: 0, x: "-100px" }}
          animate={{
            opacity: isAppointment ? 1 : 0,
            x: isAppointment ? 0 : "-100px",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`${
            isAppointment ? "grid" : "hidden"
          }  bg-[rgba(255,255,255,0.7)] md:grid-cols-2 align-middle justify-center backdrop-blur-xl  w-full flex-wrap gap-3 lg:justify-between items-center mx-auto p-5 rounded-lg`}
        >
          {contactDetails.abuja.map((contact, index) => (
            <ContactBlock
              key={index}
              title={contact.title}
              email={contact.content}
              span={index == 2 ? 2 : 1}
            />
          ))}
        </motion.div>
      </div>

      <div className="flex w-full flex-col md:flex-col px-5 md:px-0 md:w-[80%] mx-auto justify-between lg:flex-row gap-y-10">
        <div className="flex flex-col gap-6 basis-0 md:basis-1/2">
          <div>
            <h3 className="pb-3 text-2xl font-bold md:text-5xl text-white_100">
              visit our Office
            </h3>
            <p className="text-white_100">
              We welcome you to experience Scapewalkers firsthand. Whether
              you're here to discuss a project or explore our innovative
              designs, our doors are always open. Your vision is our priority.
            </p>
          </div>
          <div>
            <PrimaryButton />
          </div>
        </div>
        <div className="relative xl:w-[30%] w-full">
          <p className="absolute top-[-15px]  bg-blue-400  left-[50%] transform translate-x-[-50%] px-8 py-1 rounded-full capitalize font-medium z-30">
            hours
          </p>
          <div className="flex  caledar md:justify-center  px-[2px] pt-[2px] rounded-lg overflow-hidden ">
            <div className="relative z-20 flex flex-col items-center justify-center w-full py-10 border rounded-lg bg-white_100 gap-y-4">
              <div className="flex flex-col items-center gap-2">
                <p className="font-semibold capitalize text-md md:text-xl">
                  monday - friday
                </p>
                <p className="text-[#3f3e3edc] text-md font-medium">
                  9am - 5pm
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="font-semibold capitalize text-md md:text-xl">
                  saturdays
                </p>
                <p className="text-[#3f3e3edc] text-md font-medium">
                  11am - 5pm
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="font-semibold capitalize text-md md:text-xl">
                  sunday
                </p>
                <p className="text-[#3f3e3edc] text-md font-medium">
                  appiontment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
