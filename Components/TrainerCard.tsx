import { trainerCardProps } from '@/Types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function TrainerCard({fullName,image='',course,id}:trainerCardProps) {
  return (
    <div className=' w-96 flex flex-col '>
        <div>
           <Image src={image} width={384} height={400} alt='Trainer 1' />
        </div>
      <div className=' bg-[#445AAB] p-4'>
        <h4 className=' fontMontserrat  text-3xl leading-normal capitalize font-normal text-white'>{fullName}</h4>
        <p className='fontMontserrat  text-xl leading-normal capitalize font-normal text-white'>{course}</p>
      </div>
    <Link href={`/trainers/trainer/${id}`} className=' self-start mt-4
      border border-black p-3 fontMontserrat uppercase' > View Course</Link>
    </div>
  )
}

export default TrainerCard
