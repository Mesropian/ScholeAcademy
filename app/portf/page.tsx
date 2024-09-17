'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function page() {
  return (
    <div className='bg-[#445AAB]'>
      <section className='w-full  bg-[#445AAB]  relative'>
        <div className=' container items-center flex flex-col'>
      <div className="biglogo mt-14">
         <h2 className=' text-8xl my-14 text-[#A1CF3D] uppercase fontBebas '>portfolios</h2>
        </div>
        <div className=' flex flex-wrap justify-between gap-24'>
            <div className='proj-item fontBebas'>
                <Image src='/proj1.png' width={381} height={381} alt='Project Name'/>
            </div>
            <div className='proj-item fontBebas'>
                <Image src='/proj2.png' width={381} height={381} alt='Project Name'/>
            </div>
            <div className='proj-item fontBebas'>
                <Image src='/proj3.png' width={381} height={381} alt='Project Name'/>
            </div>
            <div className='proj-item fontBebas'>
                <Image src='/proj4.png' width={381} height={381} alt='Project Name'/>
            </div>
            <div className='proj-item fontBebas'>
                <Image src='/proj5.png' width={381} height={381} alt='Project Name'/>
            </div>
            <div className='proj-item fontBebas'>
                <Image src='/proj6.png' width={381} height={381} alt='Project Name'/>
            </div>
        </div>
        <Link href='/' className=' my-20 uppercase fontBebas text-5xl font-normal leading-normal text-[#A1CF3D]'>more projects</Link>
        </div>
      </section>
    </div>
  )
}

export default page
