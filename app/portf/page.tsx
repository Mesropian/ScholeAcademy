'use client'
import PortfCard from '@/Components/PortfCard'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function page() {
  const portfolios = [
    {
      id:1,
      name:'Portf 1',
      image:'/proj1.png',
      portf:"string",
    },
    {
      id:2,
      name:'Portf 2',
      image:'/proj2.png',
      portf:"string",
    },
    {
      id:3,
      name:'Portf 3',
      image:'/proj3.png',
      portf:"string",
    },
    {
      id:4,
      name:'Portf 4',
      image:'/proj4.png',
      portf:"string",
    },
    {
      id:5,
      name:'Portf 5',
      image:'/proj5.png',
      portf:"string",
    },
    {
      id:6,
      name:'Portf 6',
      image:'/proj6.png',
      portf:"string",
    },
  ]
  return (
    <div className='bg-[#445AAB]'>
      <section className='w-full  bg-[#445AAB]  relative'>
        <div className=' container items-center flex flex-col'>
      <div className="biglogo mt-14">
         <h2 className=' text-8xl my-14 text-[#A1CF3D] uppercase fontBebas '>portfolios</h2>
        </div>
        <div className=' flex flex-wrap justify-between gap-24'>
          {portfolios.map((e)=><PortfCard key={e.id} name={e.name} id={e.id} portf={e.portf} image={e.image} />)}
        </div>
        <Link href='/' className=' my-20 uppercase fontBebas text-5xl font-normal leading-normal text-[#A1CF3D]'>more projects</Link>
        </div>
      </section>
    </div>
  )
}

export default page
