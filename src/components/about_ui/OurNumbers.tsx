import bedroom_image from "../../assets/images/jpg/ Bedroom.jpeg";
import PrimaryButton from "../global_ui/PrimaryButton";

// const Card = () => {
//   return (
//     <div className=" flex flex-col gap-4 border-[1px] border-[#CCCED7] py-7 px-4 rounded-md ">
//       <p className="text-xl font-bold md:text-3xl">3000+</p>
//       <p className="text-lg font-medium">successful projects</p>
//       <p className="text-[#62636C] leading-[24px] tracking-[-1%]">
//         We’ve successfully implemented identity and access management solutions
//         for thousands of businesses like yours.
//       </p>
//     </div>
//   );
// };

const OurNumbers = () => {
  return (
    <section className="flex flex-col gap-10 py-20 bg-white_100 ">
      <div className="md:w-[80%] mx-auto md:px-0 pt-5 w-full lg:px-5 flex lg:items-end lg:relative lg:h-[66vh] flex-col lg:flex-row ">
        <div className="md:basis-0 lg:basis-1/2">
          <img
            src={bedroom_image}
            alt="bed room"
            className="lg:h-[60vh] h-[270px]   w-full object-cover"
          />
        </div>
        <div className="flex flex-col w-full gap-6 py-12 lg:px-10 lg:basis-1/2">
          <div className="flex flex-col gap-5 py-10 pl-10 shadow-lg lg:absolute pr-14 bg-white_100 xl:top-7 lg:top-3 lg:right-14 w-fit">
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold text-[#4775F5]">
                welcome to scapewalkers
              </p>
              <h3 className="text-4xl capitalize font-semibold md:w-[15ch]">
                innovative ideas stylish design{" "}
              </h3>
            </div>
            <p className="lg:w-[55ch] text-md  text-[#656464]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio ea amet animi enim voluptate a perspiciatis iusto rem
              quod, expedita minus labore cupiditate, alias quis accusamus
              minima, tempora quo voluptates?
            </p>
            <div className="">
              <PrimaryButton />
            </div>
          </div>
          <div className="relative flex justify-between w-full gap-10 px-10">
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-3xl font-semibold">16 +</p>
              <p className="text-md font-medium text-[#000000]/60 capitalize">
                years of experienec
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-3xl font-semibold">1250 +</p>
              <p className="text-md font-medium text-[#000000]/60 capitalize">
                projects completed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurNumbers;
