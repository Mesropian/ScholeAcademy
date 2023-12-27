"use client";
import React from 'react'
import Image from 'next/image'
import TrainerCard from '@/Components/TrainerCard';
function page() {
  return (
    <div>
      <section
        id="home"
        className="   h-[967px] w-full flex flex-col items-center relative "
      >
        <div className="biglogo">
          <Image src="/biglogo.png" alt="Big Logo" width={640} height={640} />
        </div>
      </section>
      <div className=' relative h-12'>
        <div className="anim  w-[200%] h-14  flex items-center justify-center absolute top-0 gap-3 text-black">
          <span className=' !text-black whitespace-nowrap'>Meet our trainers</span>
          <span className=' !text-black whitespace-nowrap'>Meet our trainers</span>
          <span className=' !text-black whitespace-nowrap'>Meet our trainers</span>
          <span className=' !text-black whitespace-nowrap'>Meet our trainers</span>
          <span className=' !text-black whitespace-nowrap'>Meet our trainers</span>
          <span className=' !text-black whitespace-nowrap'>Meet our trainers</span>
          <span className=' !text-black whitespace-nowrap'>Meet our trainers</span>
          <span className=' !text-black whitespace-nowrap'>Meet our trainers</span>
          <span className=' !text-black whitespace-nowrap'>Meet our trainers</span>
        </div>
      </div>
       <h2 className=' text-8xl fontBebas font-normal leading-normal text-[#445AAB] text-center my-14'>OUR TRAINERS</h2>
<div className=' mb-24'>
        <div className=' container flex flex-wrap justify-between gap-28'>
          <TrainerCard fullName='Alan Dalan' image='/trainer1.png' course='Graphic Design'/>
          <TrainerCard fullName='Alan Dalanuhi' image='/trainer2.png' course='crm'/>
          <TrainerCard fullName='Jones Smith' image='/trainer3.png' course='Project Managment'/>
          <TrainerCard fullName='Oliver Bodman' image='/trainer4.png' course='Web Development'/>
          <TrainerCard fullName='Alan Dalanuhi' image='/trainer2.png' course='crm'/>
          <TrainerCard fullName='Olivia Bennett' image='/trainer6.png' course='UI/UX Design'/>
        </div>
</div>
    </div>
  )
}

export default page
