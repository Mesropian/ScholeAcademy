"use client";
import React from "react";
import { courseProps } from "@/Types";
import Image from "next/image";
import RegisterForm from "@/Components/RegisterForm";
import { usePathname, redirect } from "next/navigation";
import Error from "@/Components/Error";

const courses = [
  {
    courseName: "graphic design",
    coursePath: "design",
    offline: true,
    hoverColor: "#EB2256",
  },
  {
    courseName: "Smm",
    coursePath: "smm",
    offline: true,
    hoverColor: "#A1CF3D",
  },
  {
    courseName: "UI/UX",
    coursePath: "uiux",
    online: true,
    hoverColor: "#1FAFD3",
  },
  {
    courseName: "Project Managment",
    coursePath: "project-managment",
    online: true,
    offline: true,
    hoverColor: "#445AAB",
  },
  {
    courseName: "Mobile App Development",
    coursePath: "mob-app-development",
    offline: true,
    hoverColor: "#A1CF3D",
  },
  {
    courseName: "WEB DEVELOPMENT",
    coursePath: "web-development",
    online: true,
    offline: true,
    hoverColor: "#EB2256",
  },
  {
    courseName: "Data Science / Analytics",
    coursePath: "data-science-analytics",
    online: true,
    hoverColor: "#1FAFD3",
  },
  {
    courseName: "CRM",
    coursePath: "crm",
    online: true,
    hoverColor: "#445AAB",
  },
  {
    courseName: "GOOGLE ADS",
    coursePath: "google-ads",
    online: true,
    offline: true,
    hoverColor: "#A1CF3D",
  },
];

interface IParamsCourseDetails {
  params: {
    coursePath: courseProps["coursePath"];
  };
}

function page({ params }: IParamsCourseDetails) {
  const currentPage = usePathname()
  if (!courses.find((e)=>e.coursePath==currentPage.split('/')[3])) {
    return <Error/>
  }
  const { coursePath } = params;

  return (
    <div>
      <div className=" w-full h-[70px] bg-[#292929]"></div>
    <h1>{courses.map((e)=>{
     return e.coursePath==coursePath['id']?e.courseName:'hello'
    })}</h1>
      <div className=" bg-[#A1CF3D]">
        <RegisterForm />
      </div>
    </div>
  );
}
export default page;
