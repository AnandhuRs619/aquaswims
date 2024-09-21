import React from 'react';
import TitlePart from '../common/TitlePart';
import Form from './Form';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

const ContactUs = () => {
  return (
    <div className='mx-auto p-6 mb-10'>
      <TitlePart
        Title="Contact us"
        subTitle1="Have a Cool Project?"
        highlight="Get in touch"
        left={true}
      /> 

      {/* Card Layout for Form and Contact Details */}
      <div className='mt-20 mb-10 max-w-7xl mx-auto border shadow-lg rounded-lg overflow-hidden bg-white'>
        <div className='flex flex-col lg:flex-row items-stretch lg:h-[750px] gap-10'>

          {/* Map and Company Details Section - Will appear first in mobile view */}
          <div className='flex-1 order-1 lg:order-2 bg-gray-100 rounded-r-lg'>
            {/* Map Embed */}
            <div className='mb-6'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1005886.0377072098!2d75.93762031249999!3d9.996830500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e71e674de8a1%3A0x1640637c3742afa1!2sAQUA%20SWIM%20INDIA!5e0!3m2!1sen!2sin!4v1726936570500!5m2!1sen!2sin"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
                className='rounded-lg border'
                title="Company Location"
              ></iframe>
            </div>

            {/* Company Details */}
            <div className='space-y-4 text-gray-700 p-3'>
              <div className='flex items-start'>
                <MdLocationOn className='text-2xl text-blue-500 mr-2' />
                <div>
                  <h4 className='text-lg font-semibold'>Our Location</h4>
                  <p> Aquaswims ,Perumattom, Kochi, Muvattupuzha, Kerala 686669</p>
                </div>
              </div>

              <div className='flex items-start'>
                <MdPhone className='text-2xl text-blue-500 mr-2' />
                <div>
                  <h4 className='text-lg font-semibold'>Phone</h4>
                  <p>+919495355982</p>
                </div>
              </div>

              <div className='flex items-start'>
                <MdEmail className='text-2xl text-blue-500 mr-2' />
                <div>
                  <h4 className='text-lg font-semibold'>Email</h4>
                  <p>info@aquaswims.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section - Will appear second in mobile view */}
          <div className='flex-1 order-2 lg:order-1 p-6 bg-white rounded-lg'>
            <Form />
          </div>

        </div>
      </div>
    </div>
  );
}

export default ContactUs;
