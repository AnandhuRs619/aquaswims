import Image from 'next/image'
import React from 'react'
import image from '../../../public/assets/images/Contact Banner.png'

const Banner = () => {
  return (
    <div className='flex my-10'>
        <Image className='w-full' src={image} ></Image>
      
    </div>
  )
}

export default Banner
