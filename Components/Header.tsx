"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const styles = {
  navLinks:
    "  cursor-pointer text-[24px]  text-[#fff]  font-normal hover:text-[#00FFF2] fontBebas",
  active: "text-[#00FFF2]",
};

function Header() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (): void => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    if (openModal) {
      const preventScroll = (e: Event) => {
        e.preventDefault();
        window.scrollTo(0, 0);
      };

      window.addEventListener("scroll", preventScroll);

      return () => {
        window.removeEventListener("scroll", preventScroll);
      };
    }
  }, [openModal]);

  const pathname = usePathname();
  const [openLeng, setOpenLeng] = useState(false);
  const [langColor, setLengColor] = useState(false);
  const handleOpenLeng = (): void => {
    setOpenLeng(!openLeng);
    setLengColor(!openLeng);
  };

  return (
    <>
      <header className=" bg-transparent absolute w-full top-0 z-50">
        <div className="container flex   gap-32 items-center  uppercase py-2  lg:p-4 pr-9">
          <div>
            <Link href="/">
              <Image src="/logo.png" alt="Schole Logo" width={90} height={53} />
            </Link>
          </div>
          <nav className="w-full lg:flex justify-end">
            <ul className=" flex w-full  justify-around lg:hidden">
              <li className={styles.navLinks}>
                <Link
                  href="/ourcourses"
                  className={pathname == "/ourcourses" ? "text-[#00FFF2]" : ""}
                >
                  our courses{" "}
                </Link>
              </li>
              <li className={styles.navLinks}>
                <Link
                  href="/aboutus"
                  className={pathname == "/aboutus" ? "text-[#00FFF2]" : ""}
                >
                  about us{" "}
                </Link>
              </li>
              <li className={styles.navLinks}>
                <Link
                  href="/trainers"
                  className={pathname == "/trainers" ? "text-[#00FFF2]" : ""}
                >
                  Trainers{" "}
                </Link>
              </li>
              <li className={styles.navLinks}>
                <Link
                  href="/portf"
                  className={pathname == "/portf" ? "text-[#00FFF2]" : ""}
                >
                  portfolio{" "}
                </Link>
              </li>
              <li className={styles.navLinks}>
                <Link
                  href="/blog"
                  className={pathname == "/blog" ? "text-[#00FFF2]" : ""}
                >
                  blog{" "}
                </Link>
              </li>
              <li className={styles.navLinks}>
                <Link
                  href="/register"
                  className={pathname == "/register" ? "text-[#00FFF2]" : ""}
                >
                  registration
                </Link>
              </li>
              <li className="flex items-center gap-[15px] flex-col-reverse">
                <div
                  className={`py-[25px] px-[51px]  absolute top-[58px] flex-col ${
                    openLeng ? "flex" : "hidden"
                  } gap-[25px] bg-[#161616] `}
                >
                  <p className=" fontInter text-[#E0E0E0] text-[16px] font-medium cursor-pointer hover:text-[#00FFF2] ">
                    English
                  </p>
                  <p className=" fontInter text-[#E0E0E0] text-[16px] font-medium cursor-pointer hover:text-[#00FFF2] ">
                    Հայերեն
                  </p>
                </div>
                <Link
                  href="#"
                  className={styles.navLinks + " flex gap-[5px] "}
                  onClick={handleOpenLeng}
                >
                  English
                </Link>
              </li>
            </ul>
            {!openModal ? (
              <Image
                src="/Vector.png"
                alt="burger"
                width={30}
                height={22.8}
                className=" hidden lg:block transition  "
                onClick={handleOpenModal}
              />
            ) : (
              <Image
                src="/Vector.png"
                alt="burger"
                width={30}
                height={22.8}
                className=" hidden lg:block rotate-90 transition  "
                onClick={handleOpenModal}
              />
            )}
          </nav>
        </div>
      </header>
      {openModal ? (
        <div className=" fixed top-0 z-[5] w-full bg-[#2B2B2B] backdrop-blur flex justify-left pb-[54px] pl-7 pt-[100px]">
          <ul className="flex flex-col gap-[40px] text-[#E1E1E1] text-left leading-normal font-normal text-xl capitalize underline fontMontserrat">
            <li onClick={handleOpenModal}>
              <Link
                href="/ourcourses"
                className={pathname == "/ourcourses" ? "text-[#00FFF2]" : ""}
              >
                our courses{" "}
              </Link>
            </li>
            <li onClick={handleOpenModal}>
              <Link
                href="/aboutus"
                className={pathname == "/aboutus" ? "text-[#00FFF2]" : ""}
              >
                about us{" "}
              </Link>
            </li>
            <li onClick={handleOpenModal}>
              <Link
                href="/trainers"
                className={pathname == "/trainers" ? "text-[#00FFF2]" : ""}
              >
                Trainers{" "}
              </Link>
            </li>
            <li onClick={handleOpenModal}>
              <Link
                href="/portf"
                className={pathname == "/portf" ? "text-[#00FFF2]" : ""}
              >
                portfolio{" "}
              </Link>
            </li>
            <li onClick={handleOpenModal}>
              <Link
                href="/blog"
                className={pathname == "/blog" ? "text-[#00FFF2]" : ""}
              >
                blog{" "}
              </Link>
            </li>
            <li onClick={handleOpenModal}>
              <Link
                href="/register"
                className={pathname == "/register" ? "text-[#00FFF2]" : ""}
              >
                registration
              </Link>
            </li>
            <li className="flex  gap-[15px] flex-col-reverse">
                <Link
                  href="#"
                  onClick={handleOpenLeng}
                >
                  English
                </Link>
              </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default Header;
