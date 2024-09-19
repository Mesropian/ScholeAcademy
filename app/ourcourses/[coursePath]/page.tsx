"use client";
import React from "react";
import { courseProps } from "@/Types";
import Image from "next/image";
import RegisterForm from "@/Components/RegisterForm";
import { usePathname, redirect } from "next/navigation";
import Error from "@/Components/Error";
import Link from "next/link";

const courses = [
  {
    courseName: "graphic design",
    coursePath: "design",
    offline: true,
    hoverColor: "#EB2256",
    duration:4,
    price:60000,
    
  },
  {
    courseName: "Smm",
    coursePath: "smm",
    offline: true,
    hoverColor: "#A1CF3D",
    duration:4,
    price:60000,
  },
  {
    courseName: "UI/UX",
    coursePath: "uiux",
    online: true,
    hoverColor: "#1FAFD3",
    duration:4,
    price:60000,
  },
  {
    courseName: "Project Managment",
    coursePath: "project-managment",
    online: true,
    offline: true,
    hoverColor: "#445AAB",
    duration:4,
    price:60000,
  },
  {
    courseName: "Mobile App Development",
    coursePath: "mob-app-development",
    offline: true,
    hoverColor: "#A1CF3D",
    duration:4,
    price:60000,
  },
  {
    courseName: "WEB DEVELOPMENT",
    coursePath: "web-development",
    online: true,
    offline: true,
    hoverColor: "#EB2256",
    duration:4,
    price:60000,
  },
  {
    courseName: "Data Science / Analytics",
    coursePath: "data-science-analytics",
    online: true,
    hoverColor: "#1FAFD3",
    duration:4,
    price:60000,
  },
  {
    courseName: "CRM",
    coursePath: "crm",
    online: true,
    hoverColor: "#445AAB",
    duration:4,
    price:60000,
  },
  {
    courseName: "GOOGLE ADS",
    coursePath: "google-ads",
    online: true,
    offline: true,
    hoverColor: "#A1CF3D",
    duration:4,
    price:60000,
  },
];

interface IParamsCourseDetails {
  params: {
    coursePath: courseProps["coursePath"];
  };
}

function page({ params }: IParamsCourseDetails) {
  const currentPage = usePathname();
  // console.log(coursePath);
  if (!courses.find((e) => e.coursePath == currentPage.split("/")[2])) {
    return <Error />;
  }
  const { coursePath } = params;

  const courseData = courses.find((e) => {
    return e.coursePath == coursePath;
  });
  
  
  // console.log(courseData);

  return (
    <div>
      <div className=" w-full h-[70px] bg-[#292929]"></div>
      <div className=" container  ">
        <div
          className="max-w-5xl text-center mt-9
         mx-auto"
        >
          <h1 className=" fontBebas text-[172px]  xl:text-[122px]  lg:text-[80px] sm:text-[40px]  ">
            {courseData?.courseName}
          </h1>
          <p className=" my-20 fontMontserrat text-black text-xl text-start">
            If you are searching for a place to learn graphic design, you've
            found it! Graphic design remains one of the most sought-after and
            well-paid professions. Despite advancements in artificial
            intelligence, the demand for skilled graphic designers persists. The
            Graphic Design course offered by Schole Centre provides you with the
            essential skills and knowledge to establish yourself in the
            profession and emerge .Throughout the ''Graphic Design with Narek
            Manukyan'' course, you will cultivate your design thinking, master
            Adobe Photoshop and Adobe Illustrator programs, grasp color theory,
            create font compositions, and craft trendy collages and graphics.
            Each student, during the course, works on an individual branding
            project, which ultimately becomes their portfolio upon completion.
          </p>
          <div className=" flex justify-around">
            <p className=" text-5xl fontBebas uppercase">
              TYPE-<span className=" text-[#A1CF3D]">OFFLINE</span>
            </p>
            <p className=" text-5xl fontBebas uppercase">
              DURATION-<span className=" text-[#A1CF3D]">3 Months</span>
            </p>
            <p className=" text-5xl fontBebas uppercase">
              Price-<span className=" text-[#A1CF3D]">60.000</span>
            </p>
          </div>
        </div>
        <div className="my-20">
          <p className="  fontMontserrat text-xl " >
            If you are searching for a place to learn graphic design, you've
            found it! Graphic design remains one of the most sought-after and
            well-paid professions. Despite advancements in artificial
            intelligence, the demand for skilled graphic designers persists. The
            Graphic Design course offered by Schole Centre provides you with the
            essential skills and knowledge to establish yourself in the
            profession and emerg
          </p>
              <div className="  mt-10 flex justify-center">
              <Link href={courseData.coursePath} className=" px-20 py-3 bg-[#A1CF3D]" >Syllabus</Link>
              </div>
        </div>
      </div>
      <div className=" bg-[#A1CF3D]">
        <RegisterForm />
      </div>
    </div>
  );
}
export default page;
