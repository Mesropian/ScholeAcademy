import React from 'react'
import { userCommentProps } from "@/Types";

function UserComment({fullName,image,comment}:userCommentProps) {
   
const bg = `bg-[#776888]`
console.log(bg);

  return (
    <div className=' w-80 !p-0 !bg-transparent !border-none flex flex-col !text-left !items-start'>
        <div className='w-full  bg-white p-5 usCom '>
            <p className=' !text-lg !font-normal !leading-normal fontMontserrat capitalize !h-[216px]'>{comment}</p>
            </div>
        <div className=' flex items-end gap-2 mt-6'>
            <div className={bg+'   w-12 h-12 rounded-full '}></div>
            <h5 className=' text-lg text-white'>{fullName}</h5>
        </div>
      
    </div>
  )
}

export default UserComment
