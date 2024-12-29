import about_us_image from "../../assets/images/jpg/aboutus.jpg";
const Mission = () => {
  return (
    <section className="bg-[#F8F9FB] py-20">
      <div className="md:w-[80%] mx-auto flex lg:flex-row flex-col md:px-0 px-5  gap-10">
        <div className="flex flex-col gap-7 basis-[50%]">
          <h3 className="text-2xl font-semibold md:text-4xl">
            Designing Excellence, Delivering Perfection
          </h3>
          <div className="flex flex-col gap-4">
            <p className="text-md font-normal leading-[29px] ">
              At Scapewalkers Limited, we are renowned for delivering
              state-of-the-art services with unmatched precision and timeliness,
              ensuring client satisfaction at every step. Our expertise spans
              Architectural Design Solutions—including Conceptual Designs,
              Interior Designs, Furniture and Product Designs, 3D
              Visualizations, and Landscape Designs for indoor and outdoor
              spaces—along with comprehensive Project Management.
            </p>

            <p className="text-md font-medium leading-[29px] ">
              {" "}
              Driven by a deep passion for Architecture, Construction, and
              tranquil environments, we approach every project with dedication
              and excellence. For us, this is more than a business{" "}
              <strong>it’s who we are</strong>
            </p>
          </div>
        </div>
        <div className="rounded-md basis-[50%]">
          <img
            src={about_us_image}
            alt="office view "
            className="object-cover w-full h-full rounded-md aspect-video"
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;
