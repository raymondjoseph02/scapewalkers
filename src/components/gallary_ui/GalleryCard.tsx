import React, { FC, useRef } from "react";
import { motion } from "framer-motion"; // Ensure correct import

interface GalleryCardProps {
  size: string; // Can be "small", "medium", or "large"
  imageUrl: string;
  title: string;
}

const GalleryCard: FC<GalleryCardProps> = ({ size, imageUrl, title }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
      }}
      viewport={{ once: true }} // Trigger animation when 50% of the element is visible
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.23, ease: "easeInOut" }}
      style={{ ...gallerycard, ...styles[size] }}
      ref={cardRef}
      className="relative overflow-hidden group"
    >
      <img
        src={imageUrl}
        alt={"thumbNails"}
        className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-[0.32s] ease-in-out"
        loading="lazy"
      />
      <div className="absolute -top-44 text-lg text-white_100 group-hover:top-0 duration-500 transition-all ease-in-out  bg-[#24232360] w-full p-3">
        {title}
      </div>
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
