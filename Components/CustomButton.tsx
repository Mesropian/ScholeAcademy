import { customBtnProps } from "@/Types";
import React from "react";

const CustomButton = ({ title, styles, click }: customBtnProps) => {
  return (
    <button className={`${styles}`} onClick={click}>
      {title}
    </button>
  );
};

export default CustomButton;