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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                delectus fugit earum est repellat ducimus. Iste eveniet
                accusantium veniam soluta numquam maxime, eos cum omnis
                consequatur repellendus. Provident, doloremque ratione.
              </p>
              <p className="pt-4 text-lg font-medium">
                Arc. Balogun AbdulHaq, CEO
              </p>
            </div>
          </div>
          <div className="h-[400px] basis-1/2 relative">
            <img
              src={simple_sitout}
              alt="thumb nail"
              className="object-cover w-full lg:h-full aspect-square md:aspect-auto"
            />
            <div className="absolute max-w-[370px] w-full py-5 bg-white_100 shadow-lg px-4 flex flex-col gap-3 bottom-0 lg:-left-40 left-0">
              <p className="pl-3 border-l-2 border-[#4775F5]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                ratione! Numquam quo officiis repellendus temporibus quos!
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
