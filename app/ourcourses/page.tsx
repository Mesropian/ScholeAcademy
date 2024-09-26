"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Course from "@/Components/Course";
import RegisterForm from "@/Components/RegisterForm";

function page() {

  const ourCourses = [
    {
      courseName: "graphic design",
      coursePath: "design",
      offline: true,
      hoverColor:"#EB2256",
      duration:4,
      price:60000,
    },
    {
      courseName: "Smm",
      coursePath: "smm",
      offline: true,
      hoverColor:"#A1CF3D",
      duration:4,
      price:60000,
    },
    {
      courseName: "UI/UX",
      coursePath: "uiux",
      online: true,
      hoverColor:"#1FAFD3",
      duration:4,
      price:60000,
    },
    {
      courseName: "Project Managment",
      coursePath: "project-managment",
      online: true,
      offline: true,
      hoverColor:"#445AAB",
      duration:4,
      price:60000,
    },
    {
      courseName: "Mobile App Development",
      coursePath: "mob-app-development",
      offline: true,
      hoverColor:"#A1CF3D",
      duration:4,
      price:60000,
    },
    {
      courseName: "WEB DEVELOPMENT",
      coursePath: "web-development",
      online: true,
      offline: true,
      hoverColor:"#EB2256",
      duration:4,
      price:60000,
    },
    {
      courseName: "Data Science / Analytics",
      coursePath: "data-science-analytics",
      online: true,
      hoverColor:"#1FAFD3",
      duration:4,
      price:60000,
    },
    {
      courseName: "CRM",
      coursePath: "crm",
      online: true,
      hoverColor:"#445AAB",
      duration:4,
      price:60000,
    },
    {
      courseName: "GOOGLE ADS",
      coursePath: "google-ads",
      online: true,
      offline: true,
      hoverColor:"#A1CF3D",
      duration:4,
      price:60000,
    },
  ];

  

  return (
    <div>
      <div className=" w-full h-[70px] bg-[#292929]"></div>
      <section className=" w-full ">
        <Image
          src="/ourcourses.png"
          width={1442}
          height={595}
          alt="courses banner"
          className=" w-full object-contain "
        />
      </section>
      <div className=" bg-[#00FFF2] py-4">
        <div className="container text-center">
          <h3 className=" fontBebas text-5xl leading-normal font-normal sm:text-2xl">
            Join Midway
          </h3>
          <Link
            href="/"
            className=" fontMontserrat text-xl font-normal capitalize underline sm:text-base"
          >
            How it works
          </Link>
        </div>
      </div>
      <section id="courses" className=" pt-24 sm:pt-6">
        <div className="container flex flex-wrap justify-between gap-[100px] sm:overflow-scroll sm:flex-nowrap sm:gap-[40px]">
          {ourCourses.map((e, i) => {
            return (
              <Course
                key={i}
                courseName={e.courseName}
                coursePath={e.coursePath}
                online={e.online}
                offline={e.offline}
                hoverColor={e.hoverColor}
                duration={e.duration}
                price={e.price}
              />
            );
          })}
        </div>
        <div className=" container text-center pt-20 pb-14  sm:hidden">
          <Link href="/" className="fontBebas text-5xl font-normal sm:hidden">
            more courses
          </Link>
        </div>
      </section>
      <section className=" bg-[#445AAB] w-full sm:mt-9">
        <div className="container pt-16 pb-11 sm:pt-2 sm:pb-2">
          <h3
            className=" text-8xl  text-white fontBebas font-normal leading-normal uppercase text-center sm:text-3xl sm:relative"
          >
            join MIdway
            <span
              className={`hidden sm:inline-block absolute duration-500 right-4 top-2 `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.9167 7.12467L16.6251 5.83301L10.0001 12.458L3.37508 5.83301L2.08341 7.12467L10.0001 14.9997L17.9167 7.12467Z"
                  fill="white"
                />
              </svg>
            </span>
          </h3>
          <ul
            className={`flex flex-col gap-7 duration-1000 sm:gap-2 sm:h-0 sm:!overflow-hidden `}
          >
            <li className=" fontMontserrat  sm:pt-5  text-white text-xl capitalize font-normal leading-[normal] sm:text-xs">
              Skip Introductory Content: If you&apos;re familiar with the basics, you
              can bypass the introductory material and dive right into the more
              advanced aspects of the course
            </li>
            <li className=" fontMontserrat text-white text-xl capitalize font-normal leading-[normal] sm:text-xs">
              Save Time: Joining midway allows you to save time by focusing on
              the content that truly challenges and engages you
            </li>
            <li className=" fontMontserrat text-white text-xl capitalize font-normal leading-[normal] sm:text-xs">
              How it’s work
            </li>
            <li className=" fontMontserrat text-white text-xl capitalize font-normal leading-[normal] sm:text-xs">
              Assessment: Before joining a course midway, we conduct a brief
              assessment to understand your existing knowledge. This helps us
              recommend the most suitable starting point for you.
            </li>
            <li className=" fontMontserrat text-white text-xl capitalize font-normal leading-[normal] sm:text-xs">
              Consultation: Our team is here to guide you. If you&apos;re unsure
              about joining midway, schedule a consultation to discuss your
              goals and determine the best entry point for your skill level.
            </li>
          </ul>
          <div
            className={` text-center duration-1000 sm:h-0 sm:overflow-hidden`}
          >
            <h5 className="uppercase fontBebas text-5xl font-normal leading-normal text-white mt-12 sm:text-3xl">
              get started
            </h5>
            <p className=" fontMontserrat text-white text-xl capitalize font-normal leading-[normal] mb-9 mt-7 sm:text-base">
              Ready to take your learning journey to the next level? Join a
              course midway and elevate your skills
            </p>
            <Link
              href=""
              className=" fontMontserrat text-white text-xl capitalize font-normal leading-[normal] underline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <section id="regForm" className=" bg-[#A1CF3D] py-1">
        <RegisterForm />
      </section>
    </div>
  );
}

export default page;
