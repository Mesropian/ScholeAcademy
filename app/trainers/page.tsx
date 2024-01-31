"use client";
import React from 'react'
import Image from 'next/image'
import TrainerCard from '@/Components/TrainerCard';



function page() {

  const trainers = [
    {id:1,fullName:'Alan Dalan',image_path:'/trainer1.png',course:'Graphic Design'},
    {id:2,fullName:'Alan Dalanuhi',image_path:'/trainer2.png',course:'crm'},
    {id:3,fullName:'Jones Smith',image_path:'/trainer3.png',course:'Project Managment'},
    {id:4,fullName:'Oliver Bodman',image_path:'/trainer4.png',course:'Web Development'},
    {id:5,fullName:'Alan Dalanuhi',image_path:'/trainer2.png',course:'crm'},
    {id:6,fullName:'Oliver Bodman',image_path:'/trainer6.png',course:'UI/UX Design'},
  ]

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
          {trainers.map((e)=>
            <TrainerCard key={e.id} fullName={e.fullName} image={e.image_path} course={e.course} id={e.id} />
          )}
        </div>
</div>
    </div>
  )
}

export default page
