import GalleryCard from "./GalleryCard";
import { Portfolio } from "../../data/Portfolio";
import { ParticlesComponents } from "../global_ui/Particles";
import { Skeleton } from "@mui/material";
import { useState, useEffect } from "react";

const Gallary = () => {
  const [isLoading, setIsLoading] = useState(true);

  const getRandomSize = () => {
    const sizes = ["small", "normal", "medium", "large"];
    const randomIndex = Math.floor(Math.random() * sizes.length);
    return sizes[randomIndex];
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 9000); // Simulate loading for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full bg-transparent">
      <ParticlesComponents />

      <div
        className={`w-full xl:w-[80%] gallery_container bg-[] ${
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
              <GalleryCard
                key={p.id} // Ensure each GalleryCard has a unique key
                size={getRandomSize()}
                imageUrl={p.projectImage}
                title={p.projectName}
              />
            ))}
      </div>
    </section>
  );
};

export default Gallary;
