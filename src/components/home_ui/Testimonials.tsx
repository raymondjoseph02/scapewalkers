import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import { useRef } from "react";
import { clientsTestimonials } from "../../data/Clients";
import { Portfolio } from "../../data/Portfolio";
const Testimonials = () => {
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);
  return (
    <section className="flex flex-col h-auto gap-10 py-5 md:py-10 bg-light_gray">
      <div className=" md:px-0 mx-auto w-[80%] relative flex flex-col items-center gap-5">
        <h3 className="text-2xl font-normal capitalize md:text-3xl ">
          what our clients say
        </h3>
      </div>
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        navigation={{
          nextEl: ".next-button",
          prevEl: ".swiper-button-back",
        }}
        spaceBetween={50}
        slidesPerView={1}
        draggable={true}
        loop={true}
        autoplay={{
          pauseOnMouseEnter: true,
          delay: 3000,
          reverseDirection: true,
        }}
        className=" w-full lg:w-[80%] lg:px-0 px-5"
      >
        {clientsTestimonials.map((t, index) => {
          return (
            <SwiperSlide key={index} className="transition-all ease-in-out">
              <div className="md:relative  flex-col  flex px-5 md:h-[45vh] lg:h-[60vh] w-full">
                <div className="left-9 md:absolute lg:left-[10%] md:w-[45%] z-10 bg-white_100 md:top-[50%] transform md:translate-y-[-50%] py-10 px-8 flex flex-col gap-6 h-fit overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-red-400 ">
                  <p className="text-lg text-gray-500">{t.content}</p>
                  <div>
                    <h4 className="font-semibold text-md md:text-xl">
                      {t.author}
                    </h4>
                    <p className="text-sm md:text-md">{t.projectName} </p>
                  </div>
                </div>
                <div className="   md:absolute right-9 lg:right-0 md:w-[50%] md:h-full w-full h-[230px]">
                  <img
                    src={t.image ? t.image : Portfolio[index]?.projectImage}
                    alt=""
                    className="object-cover w-full h-full aspect-video "
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex gap-2   lg:w-[80%] px-5 md:pl-[8%]  lg:mx-auto">
        <button
          ref={nextButtonRef}
          className="flex items-center justify-center w-12 h-12 border-2 rounded-full cursor-pointer next-button hover:bg-black group"
        >
          <FaArrowLeft
            size="20"
            className="group-hover:text-white text-white_50 "
          />
        </button>
        <button className="flex items-center justify-center w-12 h-12 border-2 rounded-full cursor-pointer swiper-button-back hover:bg-black group">
          <FaArrowRight
            size="20"
            className="group-hover:text-white text-white_50"
          />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
