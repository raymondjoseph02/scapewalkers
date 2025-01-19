import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import Slider from "./Slider";
import { useRef } from "react";

const Profolio = () => {
  const nextButtonRef = useRef(null);
  return (
    <section className="flex flex-col gap-6 py-20 bg-white">
      <div className="md:w-[80%] w-full px-5 md:px-0  mx-auto flex-col flex gap-4">
        <h3 className="text-2xl text-black capitalize md:text-3xl">
          our portfolio
        </h3>
        <div className="flex flex-col justify-between md:flex-row gap-y-4">
          <p className="md:w-[53ch] text-md ">
            Dive into our diverse architectural marvels, each a testament to our{" "}
            commitment to innovation, creativity, and excellence
          </p>
          <div className="relative flex gap-2">
            <button
              ref={nextButtonRef}
              className="flex items-center justify-center w-12 h-12 border-2 rounded-full cursor-pointer swiper-button-prev hover:bg-black group"
            >
              <FaArrowLeft
                size="20"
                className="group-hover:text-white text-white_50 "
              />
            </button>
            <button className="flex items-center justify-center w-12 h-12 border-2 rounded-full cursor-pointer swiper-button-next hover:bg-black group">
              <FaArrowRight
                size="20"
                className="absolute group-hover:text-white text-white_50"
              />
            </button>
          </div>
        </div>
      </div>
      <div>
        {" "}
        <Slider
          nextButton=".swiper-button-next"
          prevButton=".swiper-button-prev"
        />
      </div>
    </section>
  );
};

export default Profolio;
