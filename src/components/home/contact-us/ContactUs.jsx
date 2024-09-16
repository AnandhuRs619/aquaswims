import React from 'react';
import TitlePart from '../common/TitlePart';
import Form from './Form';
import Image from 'next/image';
import img from '../../../../public/assets/images/contact-image.png';

const ContactUs = () => {
  return (
    <div className='mx-auto p-6'>
      <TitlePart
        Title="Contact us"
        subTitle1="Have a Cool Projects ? "
        highlight="Get in touch "
        // subTitle2="would love to hear from you"
        left={true}
      /> 

      {/* Card Layout for Form and Image */}
      <div className='mt-20 mb-10 max-w-6xl mx-auto border shadow-lg rounded-lg overflow-hidden bg-white'>
        <div className='flex flex-col lg:flex-row items-stretch lg:h-[695px] gap-10'>
          
          {/* Form Section */}
          <div className='flex-1 p-6 bg-white rounded-lg'>
            <Form />
          </div>

          {/* Image Section */}
          <div className='hidden lg:flex flex-1'>
            <Image 
              src={img}
              width={450} 
              height={650}
              className='object-cover w-full h-full lg:rounded-r-lg'
              alt="Contact Us"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default ContactUs;
