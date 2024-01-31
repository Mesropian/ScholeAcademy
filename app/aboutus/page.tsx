"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
function page() {
  const swiperTextData = [
    {
      id:1,
      title: "lectures",
      text: "Our lectures are conducted by a diverse team of seasoned professionals and experts in their respective fields. Each instructor brings a wealth of real-world experience",
    },
    {
      id:2,
      title: "Seminars",
      text: " Our lectures are conducted by a diverse team of seasoned professionals and experts in their respective fields. Each instructor brings a wealth of real-world experience.",
    },
    {
      id:3,
      title: "Certificate",
      text: " Our lectures are conducted by a diverse team of seasoned professionals and experts in their respective fields. Each instructor brings a wealth of real-world experience.",
      
    },
    {
      id:4,
      title: "Final Project",
      text: " Our lectures are conducted by a diverse team of seasoned professionals and experts in their respective fields. Each instructor brings a wealth of real-world experience.",
    },
  ];
  // let titleStyles = " !w-[365px] !h-[260px] !bg-[#292929] py-4 px-6 border border-[#00FFF2]"
  // let textStyles = "fontMontserrat text-xl font-medium leading-normal text-white"
  return (
    <div className=" bg-[#292929] w-full h-full">
      <div className=" border-b border-white ">
        <div className=" container  pt-20">
          <h2 className=" uppercase fontBebas text-8xl font-normal leading-normal text-white">
            About us
          </h2>
        </div>
      </div>
      <div className="container flex justify-between flex-wrap items-center">
        <div className=" w-[700px]">
          <h3 className=" uppercase  text-[#A1CF3D] fontBebas text-7xl font-normal leading-normal">
            Strive to achieve
          </h3>
          <p className=" fontMontserrat text-white text-xl font-normal leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          </p>
        </div>
        <div className=" w-[520px] h-[520px] bg-[url(/logo_gr.png)] bg-cover flex items-center justify-center">
          <Image src="/sharik.png" width={303} height={315} alt="ball" />
        </div>
      </div>
      <div className=" bg-[#445AAB] py-12">
        <div className="container flex justify-between">
          <div className="  w-96">
            <h4 className=" uppercase  text-8xl fontBebas font-normal leading-normal text-white flex gap-7">
              MIssion
              <Image src="/arrow.svg" width={66} height={57} alt="arrow" />
            </h4>
            <p className="fontMontserrat text-white text-xl font-normal leading-normal">
              Keep it concise and to the point. A mission statement should be
              easily understood and memorable. Make it inspirational. A
              well-crafted mission statement can motivate both employees and
              customers
            </p>
          </div>
          <div className="  w-96">
            <h4 className=" uppercase  text-8xl fontBebas font-normal leading-normal text-white flex gap-7">
              vison
            </h4>
            <p className="fontMontserrat text-white text-xl font-normal leading-normal">
              Keep it concise and to the point. A mission statement should be
              easily understood and memorable.
            </p>
          </div>
        </div>
      </div>
      <div className="container pt-44">
        <h3 className=" text-[#00FFF2] fontBebas text-7xl font-normal leading-normal">
          What You Can Expect From schole
        </h3>
        <Swiper
          slidesPerView={3}
          spaceBetween={90}
          pagination={{
            clickable: true,
          }}
          className="mySwiper !h-[365px]"
        >

          {swiperTextData.map(e=>{
  return  <SwiperSlide key={e.id} className=" !w-[365px] !h-[260px] !bg-[#292929] py-4 px-6 border border-[#00FFF2]">
            <h6 className=" text-[#00FFF2] capitalize fontMontserrat text-3xl font-normal leading-normal">
              {e.title}
            </h6>
            <p className=" fontMontserrat text-xl font-medium leading-normal text-white ">
             {e.text}
            </p>
          </SwiperSlide>

          })}

       
        </Swiper>
      </div>
    </div>
  );
}

export default page;
