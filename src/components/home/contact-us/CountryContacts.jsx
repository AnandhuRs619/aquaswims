import React from "react";

const CountryContacts = () => {
  const countries = [
    {
      flag: "https://flagcdn.com/w40/in.png",
      number: "+919744331818",
      name: "INDIA",
    },
    {
      flag: "https://flagcdn.com/w40/gb.png",
      number: "+447721688478",
      name: "UK",
    },
    {
      flag: "https://flagcdn.com/w40/us.png",
      number: "+12818817650",
      name: "USA",
    },
    {
      flag: "https://flagcdn.com/w40/ke.png",
      number: "+254705133234",
      name: "KENYA",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 text-center">
      {countries.map((country, index) => (
        <div key={index} className="flex flex-col items-center">
          <a href={`tel:${country.number}`} className="text-md mb-2">
            {country.number}
          </a>
          <div className="flex items-center gap-2">
            <img
              src={country.flag}
              alt={`${country.name} Flag`}
              className="w-16 h-10"
            />
            <span className="text-md text-gray-500">{country.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryContacts;
