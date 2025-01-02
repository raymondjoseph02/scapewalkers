import { Link } from "react-router-dom";
import scape_walkers_logo from "../../assets/images/png/scape_logo_dark_bg.png";
import { FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import PrimaryButton from "./PrimaryButton";
const Footer = () => {
  return (
    <footer className="flex flex-col items-center h-auto pt-20 pb-2 bg-black">
      <div className="md:w-[80%] mx-auto flex-col flex gap-20 pb-10 px-5 md:px-0">
        <div className="flex justify-between border-b-[0.6px] pb-10 border-gray-300">
          <div className="flex flex-col items-end justify-between w-full gap-3 md:flex-row text-white_100 gap-y-10">
            <div className="flex flex-col gap-3">
              <h4 className="lg:text-3xl font-semibold  lg:w-[16ch]">
                Ready to transform your space?
              </h4>
              <p>
                Let us bring your vision to life with innovative designs
                tailored just for you.
              </p>
            </div>
            <div>
              <PrimaryButton />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between md:flex-row gap-y-10">
          <div className="flex flex-col gap-5 md:gap-10">
            <div className="flex flex-col gap-5 ">
              <Link to={"/"}>
                <img
                  src={scape_walkers_logo}
                  alt="scapewalkers logo"
                  className="md:w-[220px] w-[160px]"
                />
              </Link>
              <p className="text-white md:w-[40ch] lg:w-[60ch] text-sm md:text-md ">
                Explore inspired architectural solutions, meticulously crafted
                to reflect your unique style, preferences, and functional needs,
                ensuring spaces that not only captivate the eye but also enhance
                your daily living experience.
              </p>
            </div>
            <div className="flex gap-5">
              <div className="bg-gray-600 h-fit p-3 flex rounded-full group hover:bg-white transition-all duration-[0.95s] ease-in-out">
                <a href="https://www.instagram.com/scapewalkers.ltd/?igshid=YmMyMTA2M2Y%3D">
                  <FaInstagram className="text-white group-hover:scale-[1.1]  transition-all group-hover:text-black duration-[0.95s]  ease-in-out md:w-[25px] md:h-[25px]" />
                </a>
              </div>
              <div className="bg-gray-600 h-fit p-3 flex rounded-full group hover:bg-white transition-all duration-[0.95s] ease-in-out">
                <a href="https://wa.me/08034501052" target="_blank">
                  <FaWhatsapp className="text-white group-hover:scale-[1.1]  transition-all group-hover:text-black duration-[0.95s]  ease-in-out md:w-[25px] md:h-[25px]" />
                </a>
              </div>
              <div className="bg-gray-600 h-fit p-3 flex rounded-full group hover:bg-white transition-all duration-[0.95s] ease-in-out">
                <a href="https://x.com/scapewalkersltd?s=21&t=xu5hlh9f7PJGXvY32LSB3Q">
                  <FaXTwitter className="text-white group-hover:scale-[1.1]  transition-all group-hover:text-black duration-[0.95s]  ease-in-out md:w-[25px] md:h-[25px]" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 ">
            <p className="font-medium capitalize text-white_100/50">
              quick Links
            </p>
            <ul className="flex flex-col gap-3 text-white_100">
              <Link to={"/"} className="font-medium capitalize text-md">
                Home
              </Link>
              <Link to={"/about-us"} className="font-medium capitalize text-md">
                about us
              </Link>
              <Link to={"/gallery"} className="font-medium capitalize text-md">
                our portfolio
              </Link>
              <Link
                to={"/contact-us"}
                className="font-medium capitalize text-md"
              >
                contact us
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-white_100/50">
        &copy; copyright 2024. All Rights Reserved.{" "}
      </p>
    </footer>
  );
};

export default Footer;
