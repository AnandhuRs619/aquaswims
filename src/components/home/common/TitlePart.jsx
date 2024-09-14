import React from 'react';

const TitlePart = ({ Title, subTitle1, subTitle2, highlight, left }) => {
  return (
    <>
      <div className={`text-left lg:mb-8 px-3 lg:px-8 w-full `}>
        <p className="lg:text-2xl text-gray-500 uppercase mb-2 lg:mb-2">{Title}</p>
        <h1 className="text-2xl lg:text-[30px] text-gray-800 uppercase lg:leading-[46px]">
          {subTitle1}
          <span className="text-xl lg:text-[30px] font-bold mx-2 text-[#daa520] uppercase">
            {highlight}
          </span>
          {subTitle2}
        </h1>
      </div>
      <div className='pb-3'>
        <hr
          className={`mt-4 lg:border-t-2 border-black w-1/2 md:w-[465px] ${
            left ? 'ml-0' : 'ml-auto'
          }`}
        />
      </div>
    </>
  );
};

export default TitlePart;
