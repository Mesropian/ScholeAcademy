"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className="">
      <div className=" bg-[#292929] pt-20">
        <h2 className=" text-[#A1CF3D] text-8xl font-normal leading-normal fontBebas text-center">
          blog
        </h2>
      </div>
      <div className="container">
        <div className=" flex justify-between mt-20">
          <div className=" max-w-[500px]">
            <Image src="/marie.png" width={500} height={350} alt="marie" />
            <p className=" text-xl fontMontserrat font-bold leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
            </p>
          </div>
          <div className=" max-w-[600px]  leading-normal">
            <h5 className="font-bold text-3xl leading-normal fontRoboto ">Lorem Ipsum is simply dummy </h5>
            <p className=" fontRoboto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Why do we use it? It is a long established fact that
              a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal
            </p>
          </div>
        </div>
        <div className=" flex flex-wrap  mt-20 gap-[115px] justify-between">
          <div className=" bg-[#A1CF3D]  hover:bg-[#e1f763] ">
            <Image src='/image41.png' width={320} height={260} alt="blog box" />
            <div className=" flex justify-center items-center h-14">
                <p className=" fontRoboto font-bold leading-normal ">lorem impsum dolor sit amet,</p>
            </div>
          </div>
          <div className=" bg-[#A1CF3D]  hover:bg-[#e1f763] ">
            <Image src='/image43.png' width={320} height={260} alt="blog box" />
            <div className=" flex justify-center items-center h-14">
                <p className=" fontRoboto font-bold leading-normal ">lorem impsum dolor sit amet,</p>
            </div>
          </div>
          <div className=" bg-[#A1CF3D]  hover:bg-[#e1f763] ">
            <Image src='/image41.png' width={320} height={260} alt="blog box" />
            <div className=" flex justify-center items-center h-14">
                <p className=" fontRoboto font-bold leading-normal ">lorem impsum dolor sit amet,</p>
            </div>
          </div>
          <div className=" bg-[#A1CF3D]  hover:bg-[#e1f763] ">
            <Image src='/image43.png' width={320} height={260} alt="blog box" />
            <div className=" flex justify-center items-center h-14">
                <p className=" fontRoboto font-bold leading-normal ">lorem impsum dolor sit amet,</p>
            </div>
          </div>
          <div className=" bg-[#A1CF3D]  hover:bg-[#e1f763] ">
            <Image src='/image41.png' width={320} height={260} alt="blog box" />
            <div className=" flex justify-center items-center h-14">
                <p className=" fontRoboto font-bold leading-normal ">lorem impsum dolor sit amet,</p>
            </div>
          </div>
          <div className=" bg-[#A1CF3D]  hover:bg-[#e1f763] ">
            <Image src='/image41.png' width={320} height={260} alt="blog box" />
            <div className=" flex justify-center items-center h-14">
                <p className=" fontRoboto font-bold leading-normal ">lorem impsum dolor sit amet,</p>
            </div>
          </div>
        </div>
        <div className=" text-end py-12">
          <Link href='/' className=" fontMontserrat text-3xl underline leading-normal"> Read more</Link>
        </div>
      </div>
    </div>
  );
}

export default page;
