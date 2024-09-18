import React from 'react';
import Image from 'next/image';
import { companies } from '@/data/CompaniesData';

const PartnernshipCompanies = () => {
  return (
    <div className='mx-auto text-center mt-10 lg:mt-12 my-20 w-full '>
      <p className='mb-6 text-accent text-lg'>From startups to the world’s largest companies</p>
      {/* Responsive Flexbox */}
      <div className='flex flex-wrap justify-center gap-4 sm:gap-10'>
      {companies.map((company, index) => (
        <div key={index} className='flex items-center gap-2'>
          <Image src={company.logo} width={100} height={100} alt={company.name} />
          {/* <h1 className='text-accent text-lg'>{company.name}</h1> */}
        </div>
      ))}
      </div>
    </div>
  )
}

export default PartnernshipCompanies
