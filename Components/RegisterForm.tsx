import React from 'react'

function RegisterForm() {
  return (
    <div className='container min-h-[524px] flex justify-between'>
      <h3 className=' uppercase fontBebas text-8xl leading-normal text-[#445AAB] max-w-[286px] ml-[64px]'>Register now</h3>
      <form action="" className=' w-[671px] pt-12 pl-4 bg-white pr-20'>
            <h6 className=' capitalize fontMontserrat text-3xl font-normal leading-normal mb-12'>apply  now</h6>

            <div className='flex flex-col gap-4 '>
                <div className='flex flex-col'>
                    <label htmlFor="fname" className=' fontMontserrat text-base capitalize leading-normal font-normal text-[#818181]'>Full Name</label>
                    <input type="text" id="fname" name='fullName'  className=' border-b outline-none '/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="email" className=' fontMontserrat text-base capitalize leading-normal font-normal text-[#818181]'>Email</label>
                    <input type="email" id="email" name='email' className=' border-b  outline-none' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="course_name" className=' fontMontserrat text-base capitalize leading-normal font-normal text-[#818181]'>Course Name</label>
                    <input type="text" id="course_name" name='courseName' className=' border-b  outline-none' />
                </div>
                <div>
                    <button type='submit' className=' border py-2 px-11 border-[#000] uppercase fontMontserrat text-sm mt-7'>Apply</button>
                </div>
            </div>
      </form>
    </div>
  )
}

export default RegisterForm
