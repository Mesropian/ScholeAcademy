"use client";
import React from "react";
import Image from "next/image";
function page() {
  return (
    <div className=" ">
      <div className=" w-full h-[70px] bg-[#292929]"></div>
      <section className=" w-full bg-[#D9D9D9] h-[100vh] ">
        <div className="container h-full relative flex justify-center">
          <Image
            src="/biglogo.png"
            alt="Big Logo"
            width={540}
            height={540}
            className=" absolute  -left-8 -top-10"
          />
          <form
            action=""
            className=" w-[671px] pt-12 pl-4  pr-20  absolute top-[60px]"
          >
            <h2 className=" text-8xl fontBebas font-normal leading-normal text-[#445AAB]  my-14 text-left">
              register now
            </h2>
            <h6 className=" capitalize fontMontserrat text-3xl font-normal leading-normal mb-12">
              apply now
            </h6>

            <div className="flex flex-col gap-4 ">
              <div className="flex flex-col">
                <label
                  htmlFor="fname"
                  className=" fontMontserrat text-base capitalize leading-normal font-normal text-[#818181]"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fname"
                  name="fullName"
                  className=" border-b outline-none !bg-transparent !border-[black] "
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className=" fontMontserrat text-base capitalize leading-normal font-normal text-[#818181]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className=" border-b  outline-none !bg-transparent !border-[black]"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="course_name"
                  className=" fontMontserrat text-base capitalize leading-normal font-normal text-[#818181]"
                >
                  Course Name
                </label>
                <input
                  type="text"
                  id="course_name"
                  name="courseName"
                  className=" border-b  outline-none !bg-transparent !border-[black]"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className=" border py-2 px-11 border-[#000] uppercase fontMontserrat text-sm mt-7"
                >
                  Apply
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="container">

          <div className="  w-[600px] absolute  -right-60  self-end ">
            <Image
              src="/reg_ball.png"
              alt="Big Logo"
              width={613}
              height={520}
              className=" absolute z-20 "
              />
            <Image
              src="/ab_port.png"
              alt="tree dev"
              width={622}
              height={646}
              className=" absolute z-20"
              />
              </div>
          </div>
      </section>
    </div>
  );
}

export default page;
