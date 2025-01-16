import GalleryCard from "./GalleryCard";
import { Portfolio } from "../../data/Portfolio";
import { ParticlesComponents } from "../global_ui/Particles";
import { useState, useEffect } from "react";
import Modal from "./Modal";
import { Skeleton } from "@mui/material";

const Gallary = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [modalText, setModalText] = useState("");
  const [modalImage, setModalImage] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const getRandomSize = () => {
    const sizes = ["small", "normal", "medium", "large"];
    const randomIndex = Math.floor(Math.random() * sizes.length);
    return sizes[randomIndex];
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500); // Simulate loading for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full bg-transparent">
      <ParticlesComponents />

      <div
        className={`w-full xl:w-[80%] gallery_container  ${
          isLoading ? "gap-3" : "gap-0"
        }`}
      >
        {isLoading
          ? Array(Portfolio.length) // Simulating  skeletons
              .fill(0)
              .map((_, index) => (
                <Skeleton
                  key={index}
                  variant="rectangular"
                  animation="wave"
                  height={300}
                  // width={00}
                  style={{
                    marginBottom: "20px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(255,255,255,0.7)",
                  }}
                />
              ))
          : Portfolio.map((p) => (
              <div>
                <GalleryCard
                  handleOnClick={() => {
                    setModalText(p.projectName);
                    setModalImage(p.projectImage);
                    setOpenModal(true);
                  }}
                  key={p.id} // Ensure each GalleryCard has a unique key
                  size={getRandomSize()}
                  imageUrl={p.projectImage}
                  title={p.projectName}
                />
              </div>
            ))}
      </div>
      <div
        onClick={() => {
          setOpenModal(false);
        }}
        className={`${
          openModal
            ? "fixed w-screen h-screen z-20 bg-[#00000088] top-0 flex justify-center items-center"
            : " hidden"
        }`}
      >
        <div className={`${openModal ? "flex " : "hidden"} `}>
          <Modal
            text={modalText}
            image={modalImage}
            handleCloseModal={() => {
              setOpenModal(false);
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallary;
