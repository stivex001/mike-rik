import React, { ButtonHTMLAttributes, ReactNode } from "react";

type CustomBtnProps = {
  children: ReactNode;
  isPending?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const CustomButton = ({
  children,
  isPending,
  className,
  ...rest
}: CustomBtnProps) => {
  const { disabled, type, onClick } = rest;

  return (
    <button
      type={type}
      className={`flex items-center h-14 w-full text-white text-xl font-bold  bg-emerald-800 rounded-[5px] border border-emerald-500 duration-300  justify-center ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default CustomButton;
