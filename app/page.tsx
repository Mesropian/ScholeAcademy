"use client";

import UserComment from "@/Components/UserComment";
import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { Accordion, AccordionItem } from "@nextui-org/react";
import RegisterForm from "@/Components/RegisterForm";
export default function Home() {
  return (
    <>
      <section
        id="home"
        className="  h-[967px] w-full flex flex-col items-center relative "
      >
        <div className="biglogo">
          <Image src="/biglogo.png" alt="Big Logo" width={640} height={640} />
        </div>
        <div className="anim  w-[200%] h-14  flex items-center justify-center absolute bottom-0 gap-3">
          <span>ACADEMY</span>
          <span>ACADEMY</span>
          <span>ACADEMY</span>
          <span>ACADEMY</span>
          <span>ACADEMY</span>
          <span>ACADEMY</span>
          <span>ACADEMY</span>
          <span>ACADEMY</span>
          <span>ACADEMY</span>
          <span>ACADEMY</span>
          <span>ACADEMY</span>
          <span>ACADEMY</span>
          <span>ACADEMY</span>
          <span>ACADEMY</span>
          <span>ACADEMY</span>
          <span>ACADEMY</span>
        </div>
      </section>
      <div className="container  h-[647px]  py-24 flex flex-col justify-between">
        <Swiper
          slidesPerView={3}
          spaceBetween={90}
          pagination={{
            clickable: true,
          }}
          className="mySwiper !h-[300px]"
        >
          <SwiperSlide className=" !w-[330px] !h-[300px]">
            <div>
              <span>smm</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" !w-[330px] !h-[300px]">
            <div className="relative">
              <span className=" absolute left-[-35px] bg-white top-[72px]"> Graphic</span>
              <span className="absolute left-[-35px] bg-white bottom-5">
                design
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" !w-[330px] !h-[300px]">
            <div className=" relative">
              <span className=" absolute  top-6 left-6">UI</span>
              <span className=" absolute w-24 h-2  -rotate-45   bg-[#A1CF3D] left-[32%] top-[47%]"></span>
              <span className=" absolute  bottom-6 right-6">UX</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!mr-[144px]  !w-[330px] !h-[300px]">
            <div className=" relative">
              <p className=" absolute left-6">Project</p>
              <p className=" absolute left-6 bottom-4 bg-white">Managment</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" !mr-[193px]  !w-[330px] !h-[300px]">
            <div className=" relative">
              <p className=" absolute left-6 whitespace-nowrap bg-white">
                Mobile App
              </p>
              <p className=" absolute left-6 bottom-4 bg-white">Development</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!mr-[193px]  !w-[330px] !h-[300px]">
            <div className=" relative">
              <p className=" absolute left-6">Web </p>
              <p className=" absolute left-6 bottom-4 bg-white">Development</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" !w-[330px] !h-[300px]">
            <div className="relative">
              <p>crm </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <Link
          href="/ourcourses"
          className=" fontBebas text-5xl font-normal self-end mt-16"
        >
          MORE COURSES
        </Link>
      </div>
      <section className=" bg-black  py-6">
        <div className="container min-h-[963px] flex">
          <div className=" w-[35%] flex justify-between relative">
            <p className=" text-white fontMontserrat text-3xl uppercase font-normal mt-16 max-w-80">
              It’s never too late to try something new
            </p>
            <h3 className=" text-white fontMontserrat text-6xl -rotate-90 whitespace-nowrap absolute ml-[5rem] top-[408px] uppercase">
              upcoming courses
            </h3>
          </div>
          <div className=" w-[65%] flex flex-col">
            <div className=" w-full flex">
              <div className=" w-[50%] bg-[#FF58EE] pt-14 pl-11 pb-5 pr-16 flex flex-col justify-between">
                <h4 className=" text-3xl fontMontserrat uppercase font-medium p-3 pl-5">
                  Software Quality Assurance:
                </h4>
                <ul className=" list-disc mt-8 fontMontserrat text-lg font-normal capitalize">
                  <li>Basics of project management in an IT context</li>
                  <li>
                    Agile methodologies project planning and team collaboration
                  </li>
                </ul>
                <Link
                  href="#"
                  className=" mt-28 self-end border border-black p-3 fontMontserrat uppercase"
                >
                  view course
                </Link>
              </div>
              <div className=" w-[50%] bg-[#00FFF2] pt-14 pl-11 pb-5 pr-16 flex flex-col justify-between">
                <h4 className="text-3xl fontMontserrat uppercase font-medium p-3 pl-5">
                  Project Management
                </h4>
                <ul className=" list-disc mt-8 fontMontserrat text-lg font-normal capitalize">
                  <li>Introduction to testing methodologies</li>
                  <li>Test planning execution and automation</li>
                </ul>
                <Link
                  href="#"
                  className=" mt-28 self-end border border-black p-3 fontMontserrat uppercase"
                >
                  view course
                </Link>
              </div>
            </div>
            <div className=" w-full flex">
              <div className=" w-[50%] bg-[#B5D4AE;] pt-14 pl-11 pb-5 pr-16 flex flex-col justify-between">
                <h4 className=" text-3xl fontMontserrat uppercase font-medium p-3 pl-5">
                  3D Design and Modeling
                </h4>
                <ul className=" list-disc mt-8 fontMontserrat text-lg font-normal capitalize">
                  <li>
                    introduction to 3D modeling software (e.g. Blender Autodesk
                    Maya)
                  </li>
                  <li>
                    Basics of 3D design for games, simulations or virtual
                    reality
                  </li>
                </ul>
                <Link
                  href="#"
                  className=" mt-28 self-end border border-black p-3 fontMontserrat uppercase"
                >
                  view course
                </Link>
              </div>
              <div className=" w-[50%] bg-[#A3BACE] pt-14 pl-11 pb-5 pr-16 flex flex-col justify-between">
                <h4 className="text-3xl fontMontserrat uppercase font-medium p-3 pl-5">
                  Web Development Fundamentals
                </h4>
                <ul className=" list-disc mt-8 fontMontserrat text-lg font-normal capitalize">
                  <li>HTML, CSS, and JavaScript basics.</li>
                  <li>Introduction to front-end and back-end development.</li>
                </ul>
                <Link
                  href="#"
                  className=" mt-28 self-end border border-black p-3 fontMontserrat uppercase"
                >
                  view course
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#EBEBEB]">
        <section
          id="about_portf"
          className=" flex items-start container min-h-[732px] justify-between "
        >
          <div className=" flex flex-col  w-[324px] items-start">
            <h3 className=" text-[100px] font-normal fontBebas leading-normal mt-[208px]">
              about us
            </h3>
            <p className=" text-lg capitalize font-normal leading-normal fontMontserrat mb-32">
              A remarkable about page is genuine, approachable, and
              distinguished. Visitors should get a glimpse into what working
              with you might be like. You can include personal interests,
              stories, and photos that convey the unique story of your business.
            </p>
            <Link
              href="#"
              className=" font-normal text-xl capitalize fontMontserrat py-2 px-9 border border-black mb-14 "
            >
              more
            </Link>
          </div>
          <div className=" self-end">
            <Image src="/ab_port.png" alt="team" width={622} height={645} />
          </div>
          <div className=" flex flex-col  w-[324px] items-start  mt-[208px] ml-4">
            <h3 className=" text-[100px] font-normal fontBebas leading-normal ">
              PORTFOLIO
            </h3>
            <p className=" text-lg capitalize font-normal leading-normal fontMontserrat mb-32">
              Discover innovation through our lens. Crafting digital experiences
              that resonate, our portfolio showcases a harmonious blend of
              cutting-edge technology and inspired design
            </p>
            <Link
              href="#"
              className=" font-normal text-xl capitalize fontMontserrat py-2 px-9 border border-black self-end mt-14"
            >
              more
            </Link>
          </div>
        </section>
      </div>
      <section id="faq">
        <div className="container py-24">
          <h3 className=" fontBebas font-normal text-5xl leading-normal ">
            FREQUENTLY ASKED QUESTION
          </h3>
          <div className="!max-w-[848px]">
            <Accordion selectionMode="multiple">
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="  Why choose trainings suggested by Schole centre?"
                className="fontMontserrat capitalize font-normal text-lg leading-normal  "
              >
                Why choose trainings suggested by Schole centre?
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="  Are 2 months enough to be a Graphic or UX/UI designer?"
                className="fontMontserrat capitalize font-normal text-lg leading-normal  "
              >
                Are 2 months enough to be a Graphic or UX/UI designer?
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title=" If I already have knowledge with the topics, could I upgrade my skills?"
                className="fontMontserrat capitalize font-normal text-lg leading-normal  "
              >
                If I already have knowledge with the topics, could I upgrade my
                skills?
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Accordion 4"
                title="   Do you provide computers for trainings?"
                className="fontMontserrat capitalize font-normal text-lg leading-normal  "
              >
                Do you provide computers for trainings?
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="Accordion 5"
                title=" Is the knowledge of professional programs mandatory to attend the training course?"
                className="fontMontserrat capitalize font-normal text-lg leading-normal  "
              >
                Is the knowledge of professional programs mandatory to attend
                the training course?
              </AccordionItem>
              <AccordionItem
                key="6"
                aria-label="Accordion 6"
                title="  How can I pay for the training?"
                className="fontMontserrat capitalize font-normal text-lg leading-normal  "
              >
                How can I pay for the training?
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      <section className=" w-full bg-[#445AAB] min-h-[686px] text-white text-center">
        <div className="container">
          <h3 className=" text-8xl fontBebas font-normal leading-normal">
            THEY TRUSTED US
          </h3>
          <Swiper
            slidesPerView={3}
            spaceBetween={90}
            pagination={{
              clickable: true,
            }}
            className="mySwiper !h-[376px]"
          >
            <SwiperSlide className=" !w-[330px] !h-[300px]">
              <UserComment
                fullName="Ricardo Kaka"
                comment="“ Academy is the forge where my tech dreams were molded into reality. The curriculum is a masterpiece, and the instructors are true artisans, shaping us into coding wizards. Five stars for turning aspirations into algorithms “"
                image="https://cdn-icons-png.flaticon.com/512/921/921110.png"
              />
            </SwiperSlide>
            <SwiperSlide className=" !w-[330px] !h-[300px]">
              <UserComment
                fullName="Ethan Blackwell"
                comment="“ Schole isn't just a school; it's a launchpad for the next generation of innovators. The instructors are bridge builders, connecting theory with real-world applications. It's not about learning to 
                code “"
                image="https://cdn-icons-png.flaticon.com/512/921/921110.png"
              />
            </SwiperSlide>
            <SwiperSlide className=" !w-[330px] !h-[300px]">
              <UserComment
                fullName="Serena Hawthorne"
                comment="“ Schole isn't just a school; it's a launchpad for the next generation of innovators. The instructors are bridge builders, connecting theory with real-world applications. It's not about learning to 
                code “"
                image="https://cdn-icons-png.flaticon.com/512/921/921110.png"
              />
            </SwiperSlide>
            <SwiperSlide className=" !w-[330px] !h-[300px]">
              <UserComment
                fullName="Lucas Mercer"
                comment="“ Schole isn't just a school; it's a launchpad for the next generation of innovators. The instructors are bridge builders, connecting theory with real-world applications. It's not about learning to 
                code “"
                image="https://cdn-icons-png.flaticon.com/512/921/921110.png"
              />
            </SwiperSlide>
            <SwiperSlide className=" !w-[330px] !h-[300px]">
              <UserComment
                fullName="Ալիսա"
                comment="“ Schole isn't just a school; it's a launchpad for the next generation of innovators. The instructors are bridge builders, connecting theory with real-world applications. It's not about learning to 
                code “"
                image="https://cdn-icons-png.flaticon.com/512/921/921110.png"
              />
            </SwiperSlide>
            <SwiperSlide className=" !w-[330px] !h-[300px]">
              <UserComment
                fullName="Վասիլիս"
                comment="“ Schole isn't just a school; it's a launchpad for the next generation of innovators. The instructors are bridge builders, connecting theory with real-world applications. It's not about learning to 
                code “"
                image="https://cdn-icons-png.flaticon.com/512/921/921110.png"
              />
            </SwiperSlide>
            <SwiperSlide className=" !w-[330px] !h-[300px]">
              <UserComment
                fullName="Վինիսիսւս"
                comment="“ Schole isn't just a school; it's a launchpad for the next generation of innovators. The instructors are bridge builders, connecting theory with real-world applications. It's not about learning to 
                code “"
                image="https://cdn-icons-png.flaticon.com/512/921/921110.png"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section id="regForm" className=" bg-[#A1CF3D] py-1">
      <RegisterForm/>
      </section>
    </>
  );
}
