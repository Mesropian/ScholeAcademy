"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
function Footer() {
  const pathname = usePathname();
  return (
    <footer className=" bg-[#292929] py-7">
      <div className="container flex justify-between">
        <div>
          <Link href="/">
            <Image src="/logo.png" alt="Schole Logo" width={95} height={55} />
          </Link>
        </div>
        <ul>
          <li className=" fontMontserrat  text-xl text-white  font-medium lowercase mb-2 ">
            <Link
              href="/ourcourses "
              className={pathname == "/ourcourses" ? "text-[#00FFF2]" : ""}
            >
              about us
            </Link>
          </li>
          <li className=" fontMontserrat  text-xl text-white  font-medium lowercase mb-2">
            <Link
              href="/ourcourses "
              className={pathname == "/ourcourses" ? "text-[#00FFF2]" : ""}
            >
              services
            </Link>
          </li>
          <li className=" fontMontserrat  text-xl text-white  font-medium lowercase mb-2">
            <Link
              href="/ourcourses "
              className={pathname == "/ourcourses" ? "text-[#00FFF2]" : ""}
            >
              registration
            </Link>
          </li>
          <li className=" fontMontserrat  text-xl text-white  font-medium  capitalize mt-2">
            © 2023 Schole centre
          </li>
        </ul>
        <div>
          <ul>
            <li className=" fontMontserrat  text-xl text-white  font-normal  capitalize ">
              Example 80, 0028 Yerevan
            </li>
            <li className=" fontMontserrat  text-xl text-white  font-normal  capitalize mt-2 ">
              Armenia <span className=" underline"> +374-44-55-55-22 </span>
            </li>
            <li className=" fontMontserrat  text-xl text-white  font-normal  capitalize flex justify-end items-center gap-4 mt-4">
              <Link href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="22"
                  viewBox="0 0 13 22"
                  fill="none"
                  className=" mb-[1px]"
                >
                  <path
                    d="M11.75 1.125H8.75C7.42392 1.125 6.15215 1.65178 5.21447 2.58947C4.27678 3.52715 3.75 4.79892 3.75 6.125V9.125H0.75V13.125H3.75V21.125H7.75V13.125H10.75L11.75 9.125H7.75V6.125C7.75 5.85978 7.85536 5.60543 8.04289 5.41789C8.23043 5.23036 8.48478 5.125 8.75 5.125H11.75V1.125Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
              <Link href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none">
  <path d="M12.4997 18.625C13.7374 18.625 14.9243 18.1509 15.7995 17.307C16.6747 16.4631 17.1663 15.3185 17.1663 14.125C17.1663 12.9315 16.6747 11.7869 15.7995 10.943C14.9243 10.0991 13.7374 9.625 12.4997 9.625C11.262 9.625 10.075 10.0991 9.19984 10.943C8.32467 11.7869 7.83301 12.9315 7.83301 14.125C7.83301 15.3185 8.32467 16.4631 9.19984 17.307C10.075 18.1509 11.262 18.625 12.4997 18.625Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2 18.625V9.625C2 8.13316 2.61458 6.70242 3.70854 5.64752C4.80251 4.59263 6.28624 4 7.83333 4H17.1667C18.7138 4 20.1975 4.59263 21.2915 5.64752C22.3854 6.70242 23 8.13316 23 9.625V18.625C23 20.1168 22.3854 21.5476 21.2915 22.6025C20.1975 23.6574 18.7138 24.25 17.1667 24.25H7.83333C6.28624 24.25 4.80251 23.6574 3.70854 22.6025C2.61458 21.5476 2 20.1168 2 18.625Z" stroke="white"/>
  <path d="M18.917 7.9489L18.9282 7.93652" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              </Link>
              <Link href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M6.71429 8.98214V16.125M15.2857 16.125V12.5536C15.2857 11.7958 14.9847 11.0691 14.4489 10.5333C13.9131 9.99745 13.1863 9.69643 12.4286 9.69643C11.6708 9.69643 10.9441 9.99745 10.4083 10.5333C9.87245 11.0691 9.57143 11.7958 9.57143 12.5536V16.125V8.98214M6 6.83929H7.42857M2.42857 1.125H19.5714C19.9503 1.125 20.3137 1.27551 20.5816 1.54342C20.8495 1.81133 21 2.17469 21 2.55357V19.6964C21 20.0753 20.8495 20.4387 20.5816 20.7066C20.3137 20.9745 19.9503 21.125 19.5714 21.125H2.42857C2.04969 21.125 1.68633 20.9745 1.41842 20.7066C1.15051 20.4387 1 20.0753 1 19.6964V2.55357C1 2.17469 1.15051 1.81133 1.41842 1.54342C1.68633 1.27551 2.04969 1.125 2.42857 1.125Z" stroke="white"/>
</svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
