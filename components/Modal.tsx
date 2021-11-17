import { ReactNode } from "react";

export type ModalProps = {
  children: ReactNode;
};

const Modal = ({ children }: ModalProps) => {
  return (
    <div className="flex justify-center items-center fixed inset-0 h-screen w-screen bg-black bg-opacity-70">
      <div className="flex flex-col rounded-md p-4 bg-white w-full max-w-md">
        {children}
      </div>
    </div>
  );
};

export default Modal;
