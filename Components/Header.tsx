"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';


const styles = {
    navLinks:
      "  cursor-pointer text-[24px]  text-[#fff]  font-normal hover:text-[#00FFF2] fontBebas",
    active:"text-[#00FFF2]"
  };

 function Header() {
    const [openLeng, setOpenLeng] = useState(false);
    const [langColor, setLengColor] = useState(false);
    const handleOpenLeng = (): void => {
        setOpenLeng(!openLeng);
        setLengColor(!openLeng);
      };
    
  return (
    <header className=' bg-black'>
        <div className='container flex  gap-32 items-center  uppercase py-2 '>
            <div>
                <Link href="/">
                    <Image
                    src="/logo.png"
                    alt='Schole Logo'
                    width={90}
                    height={53}
                    />
                </Link>
            </div>
            <nav className='w-full'>
                <ul className=' flex w-full  justify-around'>
                    <li className={styles.navLinks}><Link href="/ourcourses ">our courses </Link></li>
                    <li className={styles.navLinks}><Link href="/aboutus ">about us </Link></li>
                    <li className={styles.navLinks}><Link href="/trainers ">Trainers </Link></li>
                    <li className={styles.navLinks}><Link href="/blog ">blog </Link></li>
                    <li className={styles.navLinks}><Link href="/registration">registration</Link></li>
                    <li className="flex items-center gap-[15px] flex-col-reverse">
                <div
                  className={`py-[25px] px-[51px]  absolute top-[58px] flex-col ${
                    openLeng ? "flex" : "hidden"
                  } gap-[25px] bg-[#161616] `}
                >
                  <p className=" fontInter text-[#E0E0E0] text-[16px] font-medium cursor-pointer hover:text-[#FFAB17] ">
                    English
                  </p>
                  <p className=" fontInter text-[#E0E0E0] text-[16px] font-medium cursor-pointer hover:text-[#FFAB17] ">
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
            </nav>
        </div>
        <nav>

        </nav>
    </header>
  )
}




export default Header