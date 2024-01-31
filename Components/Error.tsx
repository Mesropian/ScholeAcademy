import React from 'react'
import Link from 'next/link'

function Error() {
    return (
        <div className=' h-full'>
          <div className=" w-full h-[70px] bg-[#292929]"></div>
          <div className=' flex items-center justify-center flex-col h-[700px] gap-12  '>
          <span className=' fontMontserrat text-9xl'>404</span>
          <h3 className=' fontMontserrat text-3xl'><Link href="/">Home</Link></h3>
          </div>
        </div>
      )
}

export default Error
