import { useEffect, useRef, useState } from "react";
import bedroom from "../../assets/images/jpg/ Bedroom.jpeg";

const About = () => {
  const progressRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [percent, setPercent] = useState(0);
  const [projects, setProjects] = useState(700);
  const [clients, setClients] = useState(350);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false); // Element has left the viewport
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let interval = null;

    if (isVisible == true) {
      interval = setInterval(() => {
        setPercent((prev) => (prev < 100 ? prev + 1 : prev));
        setProjects((prev) => (prev < 1200 ? prev + 10 : prev));
        setClients((prev) => (prev < 750 ? prev + 10 : prev));
      }, 20);
    } else if (isVisible == false) {
      setPercent(0);
      setProjects(700);
      setClients(350);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isVisible, percent]);

  return (
    <section className="py-12 bg-light_gray md:pt-20">
      <div className="md:w-[80%] w-[90%] mx-auto h-full">
        <div className="flex lg:relative lg:h-[50vh]">
          <div className="hidden lg:flex absolute left-0 w-[55%] z-10 top-[50%] transform translate-y-[-50%]">
            <img
              src={bedroom}
              alt="well-decorated bedroom"
              className="object-cover w-full aspect-video"
            />
          </div>
          <div className="bg-white_100 md:p-16 py-5 px-6 flex-col flex gap-3 lg:absolute lg:w-[50%] z-20 right-0 lg:top-[50%] transform lg:translate-y-[-50%] shadow-[#00000022] shadow-[1px_3px_40px_5px]">
            <p className="font-medium capitalize md:text-3xl">about us</p>
            <p className="text-[#757474ee]">
              We believe in the power of architecture and design to shape the
              way we live, work, and interact with the world around us. With a
              passion for innovation and a dedication to excellence, we strive
              to push boundaries, challenge conventions, and create spaces that
              inspire and endure.
            </p>
          </div>
        </div>

        <div className="grid justify-between grid-cols-3 pt-9">
          <>
            <div className="p-5 text-center border-collapse border-x-2">
              <p className="font-bold md:text-3xl animate-fade-in">
                {projects}+
              </p>
              <p className="text-sm font-semibold capitalize text-black/60 md:text-md">
                successful projects
              </p>
            </div>
            <div className="p-5 text-center border-collapse">
              <p className="font-bold md:text-3xl animate-fade-in">
                {clients}+
              </p>
              <p className="text-sm font-semibold capitalize text-black/60 md:text-md">
                happy clients
              </p>
            </div>
            <div
              ref={progressRef}
              className="p-5 text-center border-collapse border-x-2"
            >
              <p className="font-bold md:text-3xl animate-fade-in">
                {percent}%
              </p>
              <p className="text-sm font-semibold capitalize text-black/60 md:text-md">
                client satisfaction
              </p>
            </div>
          </>
        </div>
      </div>
    </section>
  );
};

export default About;
