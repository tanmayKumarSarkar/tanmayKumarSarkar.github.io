import React from "react";

const SmallCard = ({ Sclass, children }) => {
  return (
    <div
      className={`${Sclass} w-[28px] md:w-[50px] h-[28px] md:h-[50px] rounded-md md:rounded-xl flex justify-center items-center text-xl md:text-4xl`}
    >
      {children}
    </div>
  );
};

export default SmallCard;
