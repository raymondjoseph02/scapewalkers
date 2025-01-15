import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FC } from "react";
import { Portfolio } from "../../data/Portfolio";
interface SliderProps {
  nextButton: string;
  prevButton: string;
}
const Slider: FC<SliderProps> = ({ nextButton, prevButton }) => {
  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y, Autoplay]}
      spaceBetween={30}
      breakpoints={{
        768: {
          slidesPerView: 2.5,
        },
        640: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 1.5,
        },
      }}
      navigation={{
        nextEl: nextButton,
        prevEl: prevButton,
      }}
      autoplay={{ pauseOnMouseEnter: true }}
      loop={true}
      className="w-[80%]"
    >
      {Portfolio.map((p) => (
        <SwiperSlide className="w-[20rem] h-[430px] md:h-fit relative overflow-hidden cursor-pointer group transition-all ease-in-out ">
          <img
            src={p.projectImage}
            alt={p.projectName}
            className="object-cover aspect-video"
          />
          <p className="lg:text-lg text-sm font-medium capitalize transition-all duration-500 absolute bottom-[-110%] group-hover:bottom-0 py-4 px-2 bg-black/40 text-white_100 w-full">
            {p.projectName}
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
