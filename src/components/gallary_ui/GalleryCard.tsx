import React, { FC, useRef } from "react";
import { motion } from "framer-motion"; // Ensure correct import
import image from "../../assets/images/png/Gallery of Eames Office Celebrates 80 Years of Design History with Exhibition in Tokyo  - 1.jpeg";

interface GalleryCardProps {
  size: string; // Can be "small", "medium", or "large"
}

const GalleryCard: FC<GalleryCardProps> = ({ size }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      viewport={{ amount: 0.1 }} // Trigger animation when 50% of the element is visible
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.23, ease: "easeInOut" }}
      style={{ ...gallerycard, ...styles[size] }}
      ref={cardRef}
      className="group"
    >
      <img
        src={image}
        alt="Gallery"
        className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-[0.32s] ease-in-out"
        loading="lazy"
      />
    </motion.div>
  );
};

const gallerycard: React.CSSProperties = {
  margin: "8px 8px",
  padding: 0,
  overflow: "hidden", // Prevents content overflow
  borderRadius: "8px", // Adds some styling
};

const styles: Record<string, React.CSSProperties> = {
  small: {
    gridRowEnd: "span 14",
  },
  normal: {
    gridRowEnd: "span 17",
  },
  medium: {
    gridRowEnd: "span 19",
  },
  large: {
    gridRowEnd: "span 21",
  },
};

export default GalleryCard;
