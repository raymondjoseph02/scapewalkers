import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import bed_room from "../../assets/images/jpg/ Bedroom.jpeg";
import "swiper/css/pagination";
import "swiper/css";
import { useRef } from "react";
import { clientsTestimonials } from "../../data/Clients";
const Testimonials = () => {
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);
  return (
    <section className="py-10 bg-light_gray flex flex-col gap-10">
      <div className=" md:px-0 mx-auto w-[80%] relative flex flex-col items-center gap-5">
        <h3 className="md:text-3xl text-2xl font-normal capitalize ">
          what our clients say
        </h3>
      </div>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        navigation={{
          nextEl: ".next-button",
          prevEl: ".swiper-button-back",
        }}
        spaceBetween={50}
        slidesPerView={1}
        draggable={true}
        loop={true}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className=" w-full lg:w-[80%] lg:px-0 px-5"
      >
        {clientsTestimonials.map((t, index) => {
          return (
            <SwiperSlide key={index} className="">
              <div className="md:relative  flex-col  flex px-5 md:h-[45vh] lg:h-[40vh] w-full">
                <div className="left-9 md:absolute lg:left-[10%] md:w-[45%] z-10 bg-white_100 md:top-[50%] transform md:translate-y-[-50%] py-10 px-8 flex flex-col gap-6">
                  <p className="text-gray-500 text-lg">{t.content}</p>
                  <div>
                    <h4 className=" text-md md:text-xl font-semibold">
                      {t.author}
                    </h4>
                    <p className="text-sm md:text-md">{t.projectName} </p>
                  </div>
                </div>
                <div className="   md:absolute right-9 lg:right-0 md:w-[50%] md:h-full w-full h-[230px]">
                  <img
                    src={bed_room}
                    alt=""
                    className="w-full h-full aspect-video object-cover "
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
          className="w-12 flex  items-center  next-button justify-center h-12 cursor-pointer hover:bg-black group rounded-full border-2"
        >
          <FaArrowLeft
            size="20"
            className="group-hover:text-white text-white_50 "
          />
        </button>
        <button className="w-12 flex items-center swiper-button-back justify-center h-12 cursor-pointer hover:bg-black group rounded-full border-2">
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
