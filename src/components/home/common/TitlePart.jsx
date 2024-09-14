import React from 'react';

const TitlePart = ({ Title, subTitle1, subTitle2, highlight, left }) => {
  return (
    <>
      <div className="text-left mb-6">
        <p className="text-lg text-gray-500 uppercase">{Title}</p>
        <h1 className="text-2xl text-gray-800 uppercase">
          {subTitle1}
          <span className="text-2xl font-bold mx-2 text-gray-800 uppercase">
            {highlight}
          </span>
          {subTitle2}
        </h1>
      </div>
      <div>
        <hr
          className={`mt-4 border-t-2 border-black md:w-[465px] ${
            left ? 'ml-0' : 'ml-auto'
          }`}
        />
      </div>
    </>
  );
};

export default TitlePart;
