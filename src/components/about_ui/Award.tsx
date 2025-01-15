import simple_sitout from "../../assets/images/jpg/simple_sitout.jpeg";
function Award() {
  return (
    <section className="py-20 bg-white_100">
      <div className="md:w-[80%] mx-auto md:px-0 px-5">
        <div className="flex flex-col justify-around gap-5 lg:flex-row ">
          <div className="">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <p className="text-xl font-semibold text-[#4775F5] capitalize">
                  award winning
                </p>
                <h3 className="text-4xl capitalize font-semibold md:w-[15ch]">
                  interior design
                </h3>
              </div>
              <p className="md:w-[44ch] leading-[26px]">
                Transform your spaces into breathtaking environments that
                reflect your personality and style. At Scapewalkers, we blend
                creativity and functionality to deliver exceptional interior
                designs.
              </p>
              <p className=" text-lg font-medium">Arc. Balogun AbdulHaq, CEO</p>
            </div>
          </div>
          <div className="h-[400px] basis-1/2 relative">
            <img
              src={simple_sitout}
              alt="thumb nail"
              className="object-cover w-full lg:h-full aspect-square md:aspect-auto"
            />
            <div className="sm:absolute md:max-w-[370px] w-full py-5 bg-white_100 shadow-lg px-4 flex flex-col gap-3 bottom-0 lg:-left-40 left-0">
              <p className="pl-3 border-l-2 border-[#4775F5]">
                With years of experience in the interior design industry, Arc.
                Balogun AbdulHaq leads Scapewalkers with a commitment to
                delivering high-quality and innovative designs that meet client
                expectations.
              </p>
              <p className="font-medium">Balogun AbdulHaq</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Award;
