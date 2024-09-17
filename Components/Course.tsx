import React, { useState } from "react";
import { courseProps } from "@/Types";
import Link from "next/link";
function Course({ courseName, online, offline, hoverColor,coursePath }: courseProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const style = {
    backgroundColor: isHovered ?  hoverColor:'white' ,
  };
  return (
    <Link
      href={`/ourcourses/${coursePath}`}
      className="w-[330px] h-[273px]  sm:h-auto"
    
    >
      <div
        className={` hover:text-white  border-[3px] border-solid border-[#292929] h-[242px] flex flex-col justify-center sm:h-[157px] sm:w-[187px]  `}
        style={style}
        onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
        <h4 className="fontBebas text-7xl uppercase self-center  pl-[30px] sm:text-xl sm:self-start ">
          {courseName}
        </h4>
      </div>
      <div className=" w-[182px] bg-[#292929] h-[30px] pl-4 sm:w-[107px] sm:pl-2 sm:h-5 text-inherit ">
        {![online, offline].every((e) => e == true) ? (
          <>
            <span className="capitalize text-xl text-[#00FFF2] leading-7 fontMontserrat sm:text-xs ">
              {online && "online"}
            </span>
            <span className="capitalize text-xl text-[#A1CF3D] leading-7 fontMontserrat sm:text-xs ">
              {offline && "Offline"}
            </span>
          </>
        ) : (
          <>
            <span className="capitalize text-xl text-[#00FFF2] leading-7 fontMontserrat sm:text-xs ">
              {online && "online"}
            </span>
            <span className="capitalize text-xl text-[#A1CF3D] leading-7 fontMontserrat sm:text-xs ">
              {offline && " / Offline"}
            </span>
          </>
        )}
      </div>
    </Link>
  );
}

export default Course;
