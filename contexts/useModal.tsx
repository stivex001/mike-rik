"use client";
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import Modal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  customStyles: Modal.Styles;
}

const ModalContext = createContext<ModalProps>({} as ModalProps);

export const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  // Styles for modal
  const customStyles: Modal.Styles = {
    overlay: {
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      opacity: "1",
    },
    content: {
      borderRadius: "10px",
      opacity: "1",
    },
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, openModal, closeModal, customStyles }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
