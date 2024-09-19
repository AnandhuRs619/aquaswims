'use client'
import dynamic from 'next/dynamic';
import { testimonialsData } from '@/data/TestimonialsData';
import TestimonialCard from './TestimonialCard';
import TitlePart from '../common/TitlePart';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamically import react-slick with no SSR
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024, // For tablet and above
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768, // For mobile view (768px and below)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className=" mx-auto p-6 mb-10">
      <TitlePart
        Title="TESTIMONIALS"
        subTitle1="MEET THE"
        highlight="TESTIMONIALS:"
        subTitle2="JOURNEY TO HARDWARE GREATNESS"
        left={true}
      />
      <Slider className='mx-auto my-20 p-4'  {...settings}>
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            image={testimonial.image}
            text={testimonial.text}
            name={testimonial.name}
            designation={testimonial.designation}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
