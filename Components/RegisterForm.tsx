import React from 'react'

function RegisterForm() {
  return (
    <div className='container min-h-[524px] flex justify-between sm:min-h-[410px]'>
      <h3 className=' uppercase fontBebas text-8xl leading-normal text-[#445AAB] max-w-[286px] ml-[64px] sm:hidden'>Register now</h3>
      <form action="" className=' w-[671px] pt-12 pl-4 bg-white pr-20 sm:bg-transparent sm:px-0'>
            <h6 className=' capitalize fontMontserrat text-3xl font-normal leading-normal mb-12 sm:hidden'>apply  now</h6>
            <h6 className=' hidden capitalize fontMontserrat text-white text-3xl font-normal leading-normal mb-12 sm:block '>register  now</h6>

            <div className='flex flex-col gap-4 '>
                <div className='flex flex-col'>
                    <label htmlFor="fname" className=' fontMontserrat text-base capitalize leading-normal font-normal text-[#818181] sm:text-white'>Full Name</label>
                    <input type="text" id="fname" name='fullName'  className=' border-b outline-none  sm:bg-transparent sm:text-white'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="email" className=' fontMontserrat text-base capitalize leading-normal font-normal text-[#818181] sm:text-white'>Email</label>
                    <input type="email" id="email" name='email' className=' border-b  outline-none sm:bg-transparent sm:text-white' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="course_name" className=' fontMontserrat text-base capitalize leading-normal font-normal text-[#818181] sm:text-white'>Course Name</label>
                    <input type="text" id="course_name" name='courseName' className=' border-b  outline-none sm:bg-transparent sm:text-white' />
                </div>
                <div className='sm:self-center'>
                    <button type='submit' className=' border py-2 px-11 border-[#000] uppercase fontMontserrat  mt-7 sm:border-none sm:text-white sm:underline'>Apply</button>
                </div>
            </div>
      </form>
    </div>
  )
}

export default RegisterForm
