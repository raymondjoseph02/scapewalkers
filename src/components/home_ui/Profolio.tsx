import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import Slider from "./Slider";
import { useRef } from "react";

const Profolio = () => {
  const nextButtonRef = useRef(null);
  return (
    <section className="py-20 flex flex-col gap-6 bg-white">
      <div className="md:w-[80%] w-full px-5 md:px-0  mx-auto flex-col flex gap-4">
        <h3 className="text-black text-2xl md:text-3xl  capitalize">
          our portfolio
        </h3>
        <div className="flex md:flex-row flex-col justify-between gap-y-4">
          <p className="md:w-[53ch] text-md ">
            Dive into our diverse architectural marvels, each a testament to our{" "}
            commitment to innovation, creativity, and excellence
          </p>
          <div className="flex gap-2 relative">
            <button
              ref={nextButtonRef}
              className="w-12 flex items-center justify-center h-12 swiper-button-next cursor-pointer hover:bg-black group rounded-full border-2"
            >
              <FaArrowLeft
                size="20"
                className="group-hover:text-white text-white_50 "
              />
            </button>
            <button className="w-12 flex items-center justify-center h-12 cursor-pointer swiper-button-prev hover:bg-black group rounded-full border-2">
              <FaArrowRight
                size="20"
                className="group-hover:text-white absolute text-white_50"
              />
            </button>
          </div>
        </div>
      </div>
      <Slider
        nextButton=".swiper-button-next"
        prevButton=".swiper-button-prev"
      />
    </section>
  );
};

export default Profolio;
