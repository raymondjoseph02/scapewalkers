import build_blue from "../../assets/images/jpg/moder_house_bluePrint.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FC } from "react";
interface SliderProps {
  nextButton: string;
  prevButton: string;
}
const Slider: FC<SliderProps> = ({ nextButton, prevButton }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
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
      loop={true}
      pagination={{ clickable: true }}
      className="w-[80%]"
    >
      <SwiperSlide className="w-[20rem] h-[430px] md:h-fit relative overflow-hidden cursor-pointer group">
        <img src={build_blue} alt="building with blue print" />
        <p className="lg:text-lg text-sm font-medium capitalize transition-all duration-500 absolute bottom-[-110%] group-hover:bottom-0 py-4 px-2 bg-black/40 text-white_100 w-full">
          the asokoro renovation residence
        </p>
      </SwiperSlide>
      <SwiperSlide className="w-[20rem] h-[430px] md:h-fit relative overflow-hidden cursor-pointer group">
        <img src={build_blue} alt="building with blue print" />
        <p className="text-lg font-medium capitalize transition-all duration-500 absolute bottom-[-110%] group-hover:bottom-0 py-4 px-2 bg-black/40 text-white_100 w-full">
          the asokoro renovation residence
        </p>
      </SwiperSlide>
      <SwiperSlide className="w-[20rem] h-[430px] md:h-fit relative overflow-hidden cursor-pointer group">
        <img src={build_blue} alt="building with blue print" />
        <p className="text-lg font-medium capitalize transition-all duration-500 absolute bottom-[-110%] group-hover:bottom-0 py-4 px-2 bg-black/40 text-white_100 w-full">
          the asokoro renovation residence
        </p>
      </SwiperSlide>
      <SwiperSlide className="w-[20rem] h-fit relative overflow-hidden cursor-pointer group">
        <img src={build_blue} alt="building with blue print" />
        <p className="text-lg font-medium capitalize transition-all duration-500 absolute bottom-[-110%] group-hover:bottom-0 py-4 px-2 bg-black/40 text-white_100 w-full">
          the asokoro renovation residence
        </p>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
