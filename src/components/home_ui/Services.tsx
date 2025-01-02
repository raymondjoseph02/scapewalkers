import { FC, useState } from "react";
import { ourService } from "../../data/Services";
import { motion } from "motion/react";
interface ServicesCardProps {
  title: string;
  description: string;
  animatByIndex: number;
}
const ServicesCard: FC<ServicesCardProps> = ({
  title,
  description,
  animatByIndex,
}) => {
  return (
    <motion.div
      initial={{
        y: 30,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{ delay: 1.9, duration: animatByIndex / 2.3 }}
      className="text-white py-6 px-4 md:py-12 md:px-7 border-[.6px] flex border-collapse flex-col gap-4 border-light_gray/30"
    >
      <img src="" alt="" />
      <h3 className="text-xl font-medium capitalize md:text-2xl">{title} </h3>
      <p className="text-white_50">{description}</p>
    </motion.div>
  );
};

const Services = () => {
  const [services, setServices] = useState(() => {
    return ourService.slice(0, 4);
  });
  const handleLoadMore = () => {
    if (services.length < ourService.length) {
      setServices(ourService);
    } else {
      setServices(() => ourService.slice(0, 3));
    }
  };

  return (
    <section className="py-20 bg-black">
      <div className="w-full px-5 md:px-0 md:w-[80%] mx-auto flex-col flex gap-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.26, ease: "easeInOut" }}
          className="text-2xl capitalize text-white_100 md:text-3xl "
        >
          our services
        </motion.p>
        <div className="grid transition-all duration-1000 ease-in-out transform border-collapse md:grid-cols-2 lg:grid-cols-3 border-light_gray/30">
          {services.map((serv, i) => (
            <ServicesCard
              key={i}
              title={serv.title}
              description={serv.description}
              animatByIndex={i}
            />
          ))}
        </div>
        <div className="flex font-semibold capitalize text-white_100 ">
          <button
            onClick={handleLoadMore}
            className="capitalize  rounded-md   h-[60px]  w-[120px] after:content-[''] after:absolute after:w-full after:h-full relative after:left-0 after:top-0 after:z-10 z-20  py-3 before:w-[118px] before:content-['] before:top-[1px] before:left-[1px] before:h-[58px] before:text-white_100 before:z-20 before:absolute before:bg-black group group-after:bg-white before:rounded-md load_more_button overflow-hidden"
          >
            <span className="relative z-30">
              {services.length < ourService.length ? "load more " : "load less"}
            </span>{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
