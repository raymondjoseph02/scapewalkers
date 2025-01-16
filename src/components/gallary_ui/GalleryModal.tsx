import { Dialog, DialogTitle, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaX } from "react-icons/fa6";
interface GalleryModalProps {
  isOpen: boolean;
  closeModal: () => void;
  modalText: string;
  modalImage: string;
}

const GalleryModal: React.FC<GalleryModalProps> = ({
  isOpen,
  closeModal,
  modalText,
  modalImage,
}) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25 backdrop-blur-[8px]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl  rounded-xl bg-white overflow-hidden pt-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
                  <div className="flex items-center justify-between px-6 gap-x-5">
                    <DialogTitle
                      as="h3"
                      className="text-2xl font-bold text-left text-black font-special"
                    >
                      {modalText}
                    </DialogTitle>
                    <button
                      onClick={closeModal}
                      className="border-[0.5px] border-black   w-6 h-6 group rounded-full flex  justify-center items-center hover:bg-gray-600"
                    >
                      <FaX className="text-black group-hover:text-white size-3" />
                    </button>
                  </div>
                  <div className="mt-4">
                    <img
                      src={modalImage}
                      alt="Gallery Item"
                      className="object-cover w-full h-auto aspect-video"
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default GalleryModal;
