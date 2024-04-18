"use client";
import { CustomButtonProps } from "@/types/index";
import React from "react";
import Image from "@/node_modules/next/image";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles, rightIcon
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType||"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
       <div className="realtive w-6 h-6">
        <Image
        src={rightIcon}
        alt = "right icon"
        fill priority
        className="object-contain ml-14"
        />
       </div>
      )}
    </button>
  );
};

export default CustomButton;
