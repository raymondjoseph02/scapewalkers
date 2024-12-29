import ContactForm from "./ContactForm";

const ContactHero = () => {
  return (
    <section className="pt-20 pb-40">
      <div className="w-full  md:w-[80%] mx-auto flex flex-col lg:flex-row px-3 sm:px-5 gap-9 md:justify-between">
        <div className="flex flex-col gap-4 ">
          <p className="text-lg font-semibold leading-3 text-blue-400 md:text-xxl">
            contact
          </p>
          <div className="flex flex-col gap-5">
            <h3 className="text-4xl font-bold capitalize md:text-5xl">
              Get in touch
            </h3>
            <p className="text-[#464444] w-full xl:w-[60ch] text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ducimus eveniet est. Voluptas facilis sed fugit laudantium,
              debitis voluptatem ipsum voluptatum. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Repellat eum harum sit, cupiditate
              illum fugiat eveniet in aperiam, eius nisi ad ea similique dolor
              natus! Voluptas distinctio accusantium perferendis ab!
            </p>
          </div>
        </div>
        <div className="flex items-start ">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
