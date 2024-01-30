"use client";
import CustomButton from "@/components/CustomButton";
import { useModal } from "@/contexts/useModal";
import { CloseIcon } from "@/icons/MenuIcons";
import { FC } from "react";
import Modal from "react-modal";

export const AppModal: FC = () => {
  const { isOpen, closeModal } = useModal();

  // Styles for modal
  const customStyles: {} = {
    overlay: {
      position: "fixed",
      top: "0%",
      right: 0,
      bottom: 0,
      opacity: "1",
    },
    content: {
      top: 0,
      left: 0,
      right: 0,
      bottom: "50%",
      // transform: "translate(0, -50%)", // Adjust the transform
      borderRadius: "8px",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      contentLabel="Contact Us Modal"
      overlayClassName={"h-full left-0 bg-[#0000009b] z-[9999]"}
      className={"absolute h-screen  overflow-scroll no-scrollbar"}
      // parentSelector={() => document.querySelector('.root')!}
    >
      <div className="w-3/4 mx-auto h-screen ">
        <div className="z-[9999]  h-screen bg-hero-section bg-no-repeat bg-cover bg-center flex items-center justify-center  ">
          <div className="absolute inset-0  bg-emerald-800 bg-opacity-75 backdrop-blur-[5px]" />
          <div className="flex flex-col z-10  ">
            <button onClick={closeModal} className="text-white mt-16 ">
              <CloseIcon />
            </button>
            <div className="mt-5 flex flex-col">
              <h1 className=" text-center text-white text-sm md:text-5xl font-bold ">
                Contact us
              </h1>
              <p className="mt-3 md:mt-5 max-w-[200px] mx-auto md:max-w-lg text-center text-white text-[11px] md:text-2xl font-medium ">
                Reach us here to begin your wonderful exporting journey with us
              </p>
              <form className="flex flex-col gap-5 md:gap-10  mt-5 w-full">
                <input
                  className=" px-5 h-12 md:h-16  bg-white rounded-[5px] border border-emerald-800  items-center flex text-zinc-600 text-base font-medium "
                  placeholder="Enter name"
                />
                <input
                  className="px-5 h-12 md:h-16  bg-white rounded-[5px] border border-emerald-800  items-center flex text-zinc-600 text-base font-medium "
                  placeholder="Enter email"
                  type="email"
                />
                <textarea
                  className="p-5 h-40  bg-white rounded-[5px] border border-emerald-800  items-center flex text-zinc-600 text-base font-medium"
                  placeholder="Type your message..."
                />
                <CustomButton className="">Send Message</CustomButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
