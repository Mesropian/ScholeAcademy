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
      offline: true,
    },
    {
      courseName: "Smm",
      offline: true,
    },
    {
      courseName: "UI/UX",
      online: true,
    },
    {
      courseName: "Project Managment",
      online: true,
      offline: true,
    },
    {
      courseName: "Mobile App Development",
      offline: true,
    },
    {
      courseName: "WEB DEVELOPMENT",
      online: true,
      offline: true,
    },
    {
      courseName: "Data Science / Analytics",
      online: true,
    },
    {
      courseName: "CRM",
      online: true,
    },
    {
      courseName: "GOOGLE ADS",
      online: true,
      offline: true,
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
          <h3 className=" fontBebas text-5xl leading-normal font-normal">
            Join Midway
          </h3>
          <Link
            href="/"
            className=" fontMontserrat text-xl font-normal capitalize underline"
          >
            How it works
          </Link>
        </div>
      </div>
      <section id="courses" className=" pt-24">
        <div className="container flex flex-wrap justify-between gap-[100px]">
          {ourCourses.map((e, i) => {
            return (
              <Course
                key={i}
                courseName={e.courseName}
                online={e.online}
                offline={e.offline}
              />
            );
          })}
        </div>
        <div className=" container text-center pt-20 pb-14">
          <Link href="/" className="fontBebas text-5xl font-normal">
            more courses
          </Link>
        </div>
      </section>
      <section className=" bg-[#445AAB] w-full">
        <div className="container pt-16 pb-11" >
          <h3 className=" text-8xl  text-white fontBebas font-normal leading-normal uppercase text-center">
            join MIdway
          </h3>
          <ul className=" flex flex-col gap-7">
            <li className=" fontMontserrat text-white text-xl capitalize font-normal leading-[normal]">Skip Introductory Content: If you're familiar with the basics, you can bypass the introductory material and dive right into the more advanced aspects of the course</li>
            <li className=" fontMontserrat text-white text-xl capitalize font-normal leading-[normal]">Save Time: Joining midway allows you to save time by focusing on the content that truly challenges and engages you</li>
            <li className=" fontMontserrat text-white text-xl capitalize font-normal leading-[normal]">How it’s work</li>
            <li className=" fontMontserrat text-white text-xl capitalize font-normal leading-[normal]">Assessment: Before joining a course midway, we conduct a brief assessment to understand your existing knowledge. This helps us recommend the most suitable starting point for you.</li>
            <li className=" fontMontserrat text-white text-xl capitalize font-normal leading-[normal]">Consultation: Our team is here to guide you. If you're unsure about joining midway, schedule a consultation to discuss your goals and determine the best entry point for your skill level.</li>
          </ul>
          <div className=" text-center">
                <h5 className="uppercase fontBebas text-5xl font-normal leading-normal text-white mt-12">get started</h5>
                <p className=" fontMontserrat text-white text-xl capitalize font-normal leading-[normal] mb-9 mt-7">Ready to take your learning journey to the next level? Join a course midway and elevate your skills</p>
                <Link href='' className=" fontMontserrat text-white text-xl capitalize font-normal leading-[normal] underline">Contact Us</Link>
          </div>
        </div>
      </section>
      <section id="regForm" className=" bg-[#A1CF3D] py-1">
      <RegisterForm/>
      </section>
    </div>
  );
}

export default page;
