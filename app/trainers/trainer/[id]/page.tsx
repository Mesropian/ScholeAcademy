"use client"
import React from "react";
import { trainerCardProps } from "@/Types";
import Image from "next/image";
import RegisterForm from "@/Components/RegisterForm";
import Error from "@/Components/Error";


interface IParamsTrainerDetails {
  params: {
    id: trainerCardProps["id"];
  };
}
const trainers = [
  {
    id: 1,
    fullName: "Alan Dalan",
    image_path: "/trainer1.png",
    course: "Graphic Design",
  },
  {
    id: 2,
    fullName: "Alan Dalanuhi",
    image_path: "/trainer2.png",
    course: "crm",
  },
  {
    id: 3,
    fullName: "Jones Smith",
    image_path: "/trainer3.png",
    course: "Project Managment",
  },
  {
    id: 4,
    fullName: "Oliver Bodman",
    image_path: "/trainer4.png",
    course: "Web Development",
  },
  {
    id: 5,
    fullName: "Alan Dalanuhi",
    image_path: "/trainer2.png",
    course: "crm",
  },
  {
    id: 6,
    fullName: "Oliver Bodman",
    image_path: "/trainer6.png",
    course: "UI/UX Design",
  },
];
function page ({ params }: IParamsTrainerDetails)  {
  const { id } = params;

  const trainer = trainers.find((trainer) => trainer.id === parseInt(id));

  if (!trainer) {
    return <Error />;
  }
  console.log(trainers[id-1]);
  
  
  return (
    <div>
      <div className=" w-full h-[70px] bg-[#292929]"></div>
      <div className=" bg-[#BEBEBE]  lg:bg-[#E9E9E9] ">
        <div className="container flex pt-16">
            <div className=" w-[600px] pb-12 lg:w-full">
    <div className=" flex justify-between items-center">
        <div>
          <h2 className=" uppercase text-[#445AAB] fontBebas text-6xl leading-[normal] lg:text-4xl">
            {trainers[id-1].fullName}
          </h2>
          <h3 className=" text-black fontBebas text-4xl leading-lose lg:text-2xl">
          {trainers[id-1].course}
          </h3>
        </div>
          <Image width={259} height={140} alt="trainer poster" src={trainers[id-1].image_path} className=" hidden lg:inline-block"/>
    </div>

          <div className="max-w-[574px] fontMontserrat text-xl capitalize flex flex-col gap-6 mt-6 lg:max-w-full lg:text-lg sm:text-sm">
            <p>
              Welcome to the realm of graphic design education led by Alan, our
              esteemed graphic design trainer at [Your School Name]. With a
              passion for both artistry and education, brings a unique blend of
              creativity and instructional prowess to our learning
              community.Understanding the diverse needs of learners.
            </p>
            <p className=" font-medium">Experience / Education</p>
            <p>
              Trainers often hold relevant academic degrees in their field of
              expertise. For example, a trainer in computer science might have a
              degree in computer science, information technology, or a related
              discipline . Trainers often hold relevant academic degrees in
              their field of expertise. For example, a trainer in
            </p>
          </div>
        </div>
        <div className="w-[600px] relative  lg:hidden">
         <Image width={992} height={1011} alt="Schole" src="/singlog.png" className=" absolute right-5 top-1"/>
         <Image width={533} height={578} alt="trainer poster" src={trainers[id-1].image_path} className=" absolute z-10  -bottom-[3px] right-0"/>
        </div>

        </div>
      </div>
      <div className=" bg-[#2B2B2B] text-center py-10">
            <h3 className=" fontBebas text-5xl leading-[normal] text-white sm:hidden">{trainers[id-1].course} Course </h3>
            <button className=" py-3 px-20 bg-[#A1CF3D] fontMontserrat text-xl leading-[normal]">Schedule</button>
      </div>
      <div className=" bg-[#A1CF3D]">
      <RegisterForm/>
      </div>
    </div>
  );
};
export default page;


