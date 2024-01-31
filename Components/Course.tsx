import React from 'react'
import { courseProps } from '@/Types'
function Course({courseName,online,offline}:courseProps) {
  return (
    <div className=' w-[330px] h-[273px] sm:h-auto   '>
        <div className=' border-[3px] border-solid border-[#292929] h-[242px] flex flex-col justify-center sm:h-[157px] sm:w-[187px] '>
            <h4 className='fontBebas text-7xl uppercase self-center  pl-[30px] sm:text-xl sm:self-start'>{courseName}</h4>
        </div>
        <div className=' w-[182px] bg-[#292929] h-[30px] pl-4 sm:w-[107px] sm:pl-2 sm:h-5'>
            {![online,offline].every(e=>e==true)?
           <>
            <span className='capitalize text-xl text-[#00FFF2] leading-7 fontMontserrat sm:text-xs '>{online && 'online'}</span>
            <span className='capitalize text-xl text-[#A1CF3D] leading-7 fontMontserrat sm:text-xs '>{offline && 'Offline'}</span>
           </>
            :
            <>
            <span className='capitalize text-xl text-[#00FFF2] leading-7 fontMontserrat sm:text-xs '>{online && 'online'}</span>
            <span className='capitalize text-xl text-[#A1CF3D] leading-7 fontMontserrat sm:text-xs '>{offline && ' / Offline'}</span>
           </>
        }
        </div>
    </div>
  )
}

export default Course
