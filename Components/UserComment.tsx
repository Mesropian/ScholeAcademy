import React from 'react'
import { userCommentProps } from "@/Types";
import Image from 'next/image';

function UserComment({fullName,image,comment}:userCommentProps) {
  return (
    <div className=' w-80 !p-0 !bg-transparent !border-none flex flex-col !text-left !items-start'>
        <div className='w-full  bg-white p-5 usCom '>
            <p className=' !text-lg !font-normal !leading-normal fontMontserrat capitalize !h-[216px]'>{comment}</p>
            </div>
        <div className=' flex items-end gap-2 mt-6'>
            <div className='   w-12 h-12 rounded-full '>
              <Image
                src={`${image}`}
                alt={fullName+' photo'}
                width={52}
                height={52}
              />
            </div>
            <h5 className=' text-lg text-white'>{fullName}</h5>
        </div>
      
    </div>
  )
}

export default UserComment
