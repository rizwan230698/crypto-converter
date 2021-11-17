import { ReactNode } from "react";

export type ButtonProps = {
  bgColor?: string;
  textColor?: string;
  onClick?: () => void;
  children: ReactNode;
  minHeight?: string;
};

const Button = ({
  bgColor,
  textColor,
  minHeight,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex-1 ${bgColor ? bgColor : "bg-blue"} ${
        textColor ? textColor : "text-white"
      } ${
        minHeight && minHeight
      } p-2 rounded-md hover:bg-opacity-90 font-medium`}
    >
      {children}
    </button>
  );
};

export default Button;
