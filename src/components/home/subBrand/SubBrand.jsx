import React from 'react'
import TitlePart from '../common/TitlePart'
import ImageCard from './ImageCard'
import img1 from '../../../../public/assets/images/Pool Img1.jpg'
import img2 from '../../../../public/assets/project/Project2img1.jpg'

const SubBrand = () => {
  return (
    <div className=" mx-auto p-6 mb-10">
        <div className='w-1/2'>
        <TitlePart Title='OUR SUB BRAND'
        subTitle1="INTRODUCING"
        highlight="AQUASWIMS:"
        subTitle2="ONE STOP SOLUTION FOR YOUR WATER ENGINEERING "
        left={true}
        />
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 md:gap-16 md:p-10">
            <ImageCard
            title="Aquaswims Pools"
            imageUrl={img1}
            />
            <ImageCard
            title="Capsule Huts"
            imageUrl={img2}
            />

          </div>
    </div>
  )
}

export default SubBrand
