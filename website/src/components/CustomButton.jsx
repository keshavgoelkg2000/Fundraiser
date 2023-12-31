import React from "react";

const CustomButton = ({ btnType, title, handleClick, styles }) => {
  return (
    <button
      type={btnType}
      className={`border-neutral-400 font-epilogue font-semibold text-[12px] md:text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${styles}`}
      onClick={handleClick}>
      {title}
    </button>
  );
};

export default CustomButton;
