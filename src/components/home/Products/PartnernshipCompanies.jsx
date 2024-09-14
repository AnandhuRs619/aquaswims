import React from 'react';
import Image from 'next/image';
import { companies } from '@/data/CompaniesData';

const PartnernshipCompanies = () => {
  return (
    <div className='mx-auto text-center mt-10 lg:mt-12 mb-10 w-full '>
      <p className='mb-6 text-accent text-xs'>From startups to the world’s largest companies</p>
      {/* Responsive Flexbox */}
      <div className='flex flex-wrap justify-center gap-6 sm:gap-10'>
      {companies.map((company, index) => (
        <div key={index} className='flex items-center gap-2'>
          <Image src={company.logo} width={30} height={30} alt={company.name} />
          <h1 className='text-accent text-2xl'>{company.name}</h1>
        </div>
      ))}
      </div>
    </div>
  )
}

export default PartnernshipCompanies
