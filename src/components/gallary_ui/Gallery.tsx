import React, { useState, useEffect } from "react";
import GalleryCard from "./GalleryCard";
import { Portfolio } from "../../data/Portfolio";
import { ParticlesComponents } from "../global_ui/Particles";
import GalleryModal from "./GalleryModal";

interface PortfolioItem {
  id: number;
  projectName: string;
  projectImage: string;
}

const Gallary: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [modalText, setModalText] = useState<string>("");
  const [modalImage, setModalImage] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const skeletonHeights = [200, 250, 300, 350, 400]; // Example heights in pixels

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000); // Simulate loading for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const openModal = (text: string, image: string) => {
    setModalText(text);
    setModalImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const getRandomHeight = () => {
    return skeletonHeights[Math.floor(Math.random() * skeletonHeights.length)];
  };
  return (
    <section className="relative w-full bg-transparent">
      <ParticlesComponents />
      <div className="container w-full gap-5 mx-auto md:columns-3 sm:columns-2 columns-1">
        {isLoading
          ? Array.from({ length: Portfolio.length }, (_, index) => (
              <div
                key={index}
                style={{ height: `${getRandomHeight()}px` }}
                className="mb-4 bg-gray-300 rounded-lg break-inside-avoid animate-pulse"
              />
            ))
          : Portfolio.map((item: PortfolioItem) => (
              <div key={item.id} className="break-inside-avoid ">
                <GalleryCard
                  imageUrl={item.projectImage}
                  title={item.projectName}
                  handleOnClick={() =>
                    openModal(item.projectName, item.projectImage)
                  }
                />
              </div>
            ))}
      </div>
      <GalleryModal
        isOpen={isOpen}
        modalText={modalText}
        modalImage={modalImage}
        closeModal={closeModal}
      />
    </section>
  );
};

export default Gallary;
