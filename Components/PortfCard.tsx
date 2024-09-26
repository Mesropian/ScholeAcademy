import { portfCardProps } from '@/Types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function PortfCard({name,image='',portf,id}:portfCardProps) {
  return (
    <Link href={portf} className='proj-item fontBebas'>
    <Image src={image} width={381} height={381} alt={portf}/>
    <div className='proj-item_cover'>
        <p>{name}</p>
    </div>
</Link>
  )
}

export default PortfCard
