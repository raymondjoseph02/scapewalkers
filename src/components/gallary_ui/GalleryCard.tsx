import React, { FC, useRef } from "react";
import { motion } from "framer-motion"; // Ensure correct import

interface GalleryCardProps {
  size?: string; // Optional, based on your use case
  imageUrl: string;
  title: string;
  handleOnClick: () => void; // No event argument needed based on your Gallary usage
}

const GalleryCard: FC<GalleryCardProps> = ({
  size = "normal", // default size if none provided
  imageUrl,
  title,
  handleOnClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      onClick={handleOnClick}
      initial={{ opacity: 0, scale: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.23, ease: "easeInOut" }}
      style={{ ...galleryCard, ...styles[size] }}
      ref={cardRef}
      className="relative pb-5 overflow-hidden cursor-pointer group"
    >
      <img
        src={imageUrl}
        alt="Thumbnail"
        className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-[0.32s] ease-in-out"
      />
        <div className="absolute backdrop-blur-sm -top-44 font-special font-semibold text-lg text-white_100 group-hover:top-0 duration-500 transition-all ease-in-out  bg-[#24232360] w-full p-3">
        {title}
      </div>

    </motion.div>
  );
};

const galleryCard: React.CSSProperties = {
  margin: "8px",
  overflow: "hidden",
  borderRadius: "8px",
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
