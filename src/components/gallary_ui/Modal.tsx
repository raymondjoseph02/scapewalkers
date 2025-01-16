import { motion } from "framer-motion";
import { FC } from "react";
import { FaX } from "react-icons/fa6";

interface ModalProps {
  text: string;
  image: string;
  handleCloseModal: (event: React.MouseEvent<HTMLElement>) => void;
}

const Modal: FC<ModalProps> = ({ text, image, handleCloseModal }) => {
  return (
    <motion.div
      onClick={handleCloseModal}
      className="overflow-hidden rounded-xl"
    >
      <p className="pb-4 font-medium text-white text-xxl">{text}</p>

      <div className="relative flex flex-col gap-5 ">
        <div
          onClick={handleCloseModal}
          className="border-[0.5px] border-black  absolute z-30 right-3 top-3 p-2 rounded-lg hover:bg-[#00000080]"
        >
          <FaX className="text-white size-6" />
        </div>
        <img
          src={image}
          alt={text}
          className="max-h-[80%] h-[60vh] w-[50vw]  object-cover rounded-xl"
        />
      </div>
    </motion.div>
  );
};

export default Modal;
