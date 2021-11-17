import { ReactNode } from "react";

export type ButtonProps = {
  bgColor?: string;
  textColor?: string;
  onClick?: () => void;
  children: ReactNode;
};

const Button = ({ bgColor, textColor, onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex-1 ${bgColor ? bgColor : "bg-blue"} ${
        textColor ? textColor : "text-white"
      } p-2 rounded-md hover:bg-opacity-90 font-medium`}
    >
      {children}
    </button>
  );
};

export default Button;
