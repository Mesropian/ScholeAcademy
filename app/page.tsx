"use client";
import UserComment from "@/Components/UserComment";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { Accordion, AccordionItem } from "@nextui-org/react";
import RegisterForm from "@/Components/RegisterForm";
export default function Home() {
  const [openFaq, setOpenFaq] = useState(false);
  const handleOpenFaq = (): void => {
    setOpenFaq(!openFaq);
  };
  const ourCourses = [
    {
      courseName: "graphic design",
    },
    {
      courseName: "Smm",
    },
    {
      courseName: "UI/UX",
    },
    {
      courseName: "Project Managment",
    },
    {
      courseName: "Mobile App Development",
    },
    {
      courseName: "WEB DEVELOPMENT",
    },
    {
      courseName: "Data Science / Analytics",
    },
    {
      courseName: "CRM",
    },
    {
      courseName: "GOOGLE ADS",
    },
  ];
  const faqData = [
    {
      id: "1",
      title: "Why choose trainings suggested by Schole centre?",
      reply: "Why choose trainings suggested by Schole centre?",
    },
    {
      id: 2,
      title: "Are 2 months enough to be a Graphic or UX/UI designer?",
      reply: "Are 2 months enough to be a Graphic or UX/UI designer?",
    },
    {
      id: 3,
      title:
        "If I already have knowledge with the topics, could I upgrade my skills?",
      reply:
        "If I already have knowledge with the topics, could I upgrade my skills?",
    },
    {
      id: 4,
      title: "Do you provide computers for trainings?",
      reply: "Do you provide computers for trainings?",
    },
    {
      id: 5,
      title:
        "Is the knowledge of professional programs mandatory to attend the training course?",
      reply:
        "Is the knowledge of professional programs mandatory to attend the training course?",
    },
    {
      id: 6,
      title: "How can I pay for the training?",
      reply: "How can I pay for the training?",
    },
  ];
  const usersComment = [
    {
      id: 1,
      fullName: "Ricardo Kaka",
      comment:
        "“ Academy is the forge where my tech dreams were molded into reality. The curriculum is a masterpiece, and the instructors are true artisans, shaping us into coding wizards. Five stars for turning aspirations into algorithms “",
      image: "/921110.png",
    },
    {
      id: 2,
      fullName: "Ethan Blackwell",
      comment:
        "“ Schole isn't just a school; it's a launchpad for the next generation of innovators. The instructors are bridge builders, connecting theory with real-world applications. It's not about learning to code “",
      image: "/921110.png",
    },
    {
      id: 3,
      fullName: "Serena Hawthorne",
      comment:
        "“ Schole isn't just a school; it's a launchpad for the next generation of innovators. The instructors are bridge builders, connecting theory with real-world applications. It's not about learning to code “",
      image: "/921110.png",
    },
    {
      id: 4,
      fullName: "Lucas Mercer",
      comment:
        "“ Schole isn't just a school; it's a launchpad for the next generation of innovators. The instructors are bridge builders, connecting theory with real-world applications. It's not about learning to code “",
      image: "/921110.png",
    },
    {
      id: 5,
      fullName: "John Smith",
      comment:
        "“ Schole isn't just a school; it's a launchpad for the next generation of innovators. The instructors are bridge builders, connecting theory with real-world applications. It's not about learning to code “",
      image: "/921110.png",
    },
    {
      id: 6,
      fullName: "Dean Winchester",
      comment:
        "“ Schole isn't just a school; it's a launchpad for the next generation of innovators. The instructors are bridge builders, connecting theory with real-world applications. It's not about learning to code “",
      image: "/921110.png",
    },
    {
      id: 7,
      fullName: "Sam Winchester",
      comment:
        "“ Schole isn't just a school; it's a launchpad for the next generation of innovators. The instructors are bridge builders, connecting theory with real-world applications. It's not about learning to code “",
      image: "/921110.png",
    },
  ];
  const faqStyles =
    "fontMontserrat capitalize font-normal text-lg leading-normal";
  return (
    <>
      <section
        id="home"
        className="  h-[967px] w-full flex flex-col items-center relative  mt-14  xl:bg-center sm:h-[300px] sm:bg-top"
      >

        <div className="anim  w-[200%] h-14  flex items-center justify-center absolute bottom-0 gap-3 sm:hidden">
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
      <div className="container  h-[647px]  py-24 flex flex-col justify-between lg:h-auto">
        <Swiper
          slidesPerView={3}
          spaceBetween={90}
          pagination={{
            clickable: true,
          }}
          className="mySwiper !h-[300px] lg:!hidden"
        >
          <SwiperSlide className=" !w-[330px] !h-[300px]">
            <div>
              <span>smm</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" !w-[330px] !h-[300px]">
            <div className="relative">
              <span className=" absolute left-[-35px] bg-white top-[72px]">
                {" "}
                Graphic
              </span>
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
        <div className=" hidden lg:flex flex-col  gap-5 ">
          {ourCourses.map((e, i) => {
            return (
              <div
                key={i}
                className=" w-full flex items-center justify-center h-16 border-[2px] border-[#A1CF3D] sm:h-10 "
              >
                <p className=" fontBebas text-3xl sm:text-2xl  ">
                  {e.courseName}
                </p>
              </div>
            );
          })}
        </div>
        <Link
          href="/ourcourses"
          className=" fontBebas text-5xl font-normal self-end mt-16 lg:text-4xl   lg:w-full  lg:flex lg:items-center lg:justify-center lg:h-16 lg:bg-[#A1CF3D] sm:h-10 sm:text-3xl"
        >
          MORE COURSES
        </Link>
      </div>
      <section className=" bg-black  py-6  sm:py-0">
        <div className="container min-h-[963px] flex lg:overflow-scroll lg:block sm:flex sm:!min-h-[263px] sm:pr-0">
          <div className=" w-[35%] flex justify-between relative lg:mb-12  sm:flex-col-reverse sm:w-[346px] sm:justify-end">
            <p className=" text-white fontMontserrat text-3xl uppercase font-normal mt-16 max-w-80  xl:text-2xl xl:max-w-60  ">
              It’s never too late to try something new
            </p>
            <h3 className=" text-white fontMontserrat text-6xl -rotate-90 whitespace-nowrap absolute ml-[5rem] top-[408px] uppercase 2xl:ml-12 xl:ml-9 xl:text-5xl lg:rotate-0 lg:top-0 lg:ml-0 lg:text-4xl sm:text-2xl sm:mr-16 sm:static sm:mt-6">
              upcoming courses
            </h3>
          </div>
          <div className=" w-[65%] flex flex-col lg:w-full sm:flex-row sm:w-auto">
            <div className=" w-full flex">
              <div className=" w-[50%] bg-[#FF58EE] pt-14 pl-11 pb-5 pr-16 flex flex-col justify-between xl:pl-8 xl:pr-12 sm:w-[346px] sm:pt-6">
                <h4 className=" text-3xl fontMontserrat uppercase font-medium p-3 pl-5 xl:pl-3 xl:text-[28px] sm:pt-0">
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
                  className=" mt-28 self-end border border-black p-3 fontMontserrat uppercase sm:mt-5"
                >
                  view course
                </Link>
              </div>
              <div className=" w-[50%] bg-[#00FFF2] pt-14 pl-11 pb-5 pr-16 flex flex-col justify-between xl:pl-8 xl:pr-12 sm:w-[346px] sm:pt-6">
                <h4 className="text-3xl fontMontserrat uppercase font-medium p-3 pl-5 xl:pl-3 xl:text-[28px] sm:pt-0">
                  Project Management
                </h4>
                <ul className=" list-disc mt-8 fontMontserrat text-lg font-normal capitalize">
                  <li>Introduction to testing methodologies</li>
                  <li>Test planning execution and automation</li>
                </ul>
                <Link
                  href="#"
                  className=" mt-28 self-end border border-black p-3 fontMontserrat uppercase sm:mt-5"
                >
                  view course
                </Link>
              </div>
            </div>
            <div className=" w-full flex ">
              <div className=" w-[50%] bg-[#B5D4AE;] pt-14 pl-11 pb-5 pr-16 flex flex-col justify-between xl:pl-8 xl:pr-12 sm:w-[346px] sm:pt-6">
                <h4 className=" text-3xl fontMontserrat uppercase font-medium p-3 pl-5 xl:pl-3 xl:text-[28px] sm:pt-0">
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
                  className=" mt-28 self-end border border-black p-3 fontMontserrat uppercase sm:mt-5"
                >
                  view course
                </Link>
              </div>
              <div className=" w-[50%] bg-[#A3BACE] pt-14 pl-11 pb-5 pr-16 flex flex-col justify-between lg:pl-8 xl:pr-12 sm:w-[346px] sm:pt-6">
                <h4 className="text-3xl fontMontserrat uppercase font-medium p-3 pl-5 xl:pl-3 xl:text-[28px] sm:pt-0">
                  Web Development Fundamentals
                </h4>
                <ul className=" list-disc mt-8 fontMontserrat text-lg font-normal capitalize">
                  <li>HTML, CSS, and JavaScript basics.</li>
                  <li>Introduction to front-end and back-end development.</li>
                </ul>
                <Link
                  href="#"
                  className=" mt-28 self-end border border-black p-3 fontMontserrat uppercase sm:mt-5"
                >
                  view course
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="group bg-[#EBEBEB] border-black hover:bg-[#EB2256] hover:text-white hover:border-white transition">
        <section
          id="about_portf"
          className=" flex items-start container  justify-between lg:flex-col lg:items-center "
        >
          <div className=" flex flex-col  w-[30%] items-start lg:w-[70%]">
            <h3 className=" text-[100px] font-normal fontBebas leading-normal mt-[208px] xl:text-[70px] lg:mt-0 sm:hidden">
              about us
            </h3>
            <p className=" text-lg capitalize font-normal leading-normal fontMontserrat mb-32 xl:text-[16px] lg:mb-12 sm:hidden">
              A remarkable about page is genuine, approachable, and
              distinguished. Visitors should get a glimpse into what working
              with you might be like. You can include personal interests,
              stories, and photos that convey the unique story of your business.
            </p>
            <Link
              href="#"
              className=" font-normal text-xl capitalize fontMontserrat py-2 px-9 border border-black group-hover:border-white mb-14  sm:hidden"
            >
              more
            </Link>
            <Link
              href=""
              className=" hidden fontBebas underline text-2xl  mt-8 uppercase text-center w-full sm:block "
            >
              about us
            </Link>
          </div>
          <div className=" self-end lg:order-1 lg:self-center">
            <Image src="/ab_port.png" alt="team" width={622} height={645} />
          </div>
          <div className=" flex flex-col  w-[30%] items-start  mt-[208px] ml-4 lg:w-[70%] lg:mt-0 lg:ml-0 ">
            <h3 className=" text-[100px] font-normal fontBebas leading-normal xl:text-[70px]  sm:hidden">
              PORTFOLIO
            </h3>
            <p className=" text-lg capitalize font-normal leading-normal fontMontserrat mb-32 xl:text-[16px] lg:mb-12 sm:hidden">
              Discover innovation through our lens. Crafting digital experiences
              that resonate, our portfolio showcases a harmonious blend of
              cutting-edge technology and inspired design
            </p>
            <Link
              href="#"
              className=" font-normal text-xl capitalize fontMontserrat py-2 px-9 border border-black group-hover:border-white self-end mt-14 lg:self-start sm:hidden"
            >
              more
            </Link>
            <Link
              href=""
              className=" hidden fontBebas underline text-2xl  my-8 uppercase text-center w-full sm:block "
            >
              portfolio
            </Link>
          </div>
        </section>
      </div>
      <section id="faq">
        <div className="container py-24   ">
          <h3
            className=" fontBebas font-normal text-5xl leading-normal sm:text-2xl sm:text-center sm:border sm:border-[black] sm:relative "
            onClick={handleOpenFaq}
          >
            FREQUENTLY ASKED QUESTION
            <span
              className={`hidden sm:inline-block absolute duration-500 right-4 top-2 ${
                openFaq ? "rotate-90" : "rotate-0"
              } `}
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
                  fill="black"
                />
              </svg>
            </span>
          </h3>
          <div
            className={`!max-w-[848px] overflow-hidden duration-1000 ${
              openFaq ? "sm:!h-auto" : "sm:!h-0"
            }`}
          >
            <Accordion selectionMode="multiple">
              {faqData.map((e) => (
                <AccordionItem key={e.id} title={e.title} className={faqStyles}>
                  {e.reply}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <section className=" w-full bg-[#445AAB] min-h-[686px] text-white text-center sm:hidden">
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
            {usersComment.map((e) => {
            return  <SwiperSlide key={e.id} className=" !w-[330px] !h-[300px]">
                <UserComment
                  fullName={e.fullName}
                  comment={e.comment}
                  image={e.image}
                />
              </SwiperSlide>;
            })}
          </Swiper>
        </div>
      </section>
      <section id="regForm" className=" bg-[#A1CF3D] py-1">
        <RegisterForm />
      </section>
    </>
  );
}
