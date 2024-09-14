import React from 'react'
import { testimonialsData } from '@/data/TestimonialsData'
import TestimonialCard from './TestimonialCard'
import TitlePart from '../common/TitlePart'

const Testimonials = () => {
  return (
    <div className=" mx-auto my-20 p-4">

         <TitlePart
      Title="TESTIMONIALS"
      subTitle1="MEET THE "
      highlight="TESTIMONIALS:"
      subTitle2="JOURNEY TO HARDWARE GREATNESS"
      left={true}
      />
        <div className="grid grid-row-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-6 mt-10 w-full">
              {testimonialsData.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  image={testimonial.image}
                  text={testimonial.text}
                  name={testimonial.name}
                  designation={testimonial.designation}
                  
                />
              ))}
            </div>
      
    </div>
  )
}

export default Testimonials
