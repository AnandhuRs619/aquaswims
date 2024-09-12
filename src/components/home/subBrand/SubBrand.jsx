import React from 'react'
import TitlePart from '../common/TitlePart'
import ImageCard from './ImageCard'
import img1 from '../../../../public/assets/images/Pool Img1.jpg'
import img2 from '../../../../public/assets/images/Pool Img2.jpg'

const SubBrand = () => {
  return (
    <div className="mx-auto mt-5 p-4">
        <TitlePart Title='OUR SUB BRAND'
        subTitle1="INTRODUCING"
        highlight="AQUA SWIM'S"
        subTitle2="IPANEL LINER POOL: ONE STOP SOLUTION FOR YOUR WATER ENGINEERING "
        />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-6">
            <ImageCard
            title="Super Gadget 2"
            imageUrl={img1}
            />
            <ImageCard
            title="Super Gadget 3"
            imageUrl={img2}
            />

          </div>
    </div>
  )
}

export default SubBrand
