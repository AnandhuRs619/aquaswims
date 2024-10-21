import React from "react";
import TitlePart from "../common/TitlePart";
import image from "../../../../public/assets/images/AboutImg.png";
import Image from "next/image";
import BGImag from "../../../../public/assets/bg-business.png";

const AboutUs = () => {
  return (
    <div
      className="mx-auto p-6 mb-10 "
      // style={{ backgroundImage: `url(${BGImag.src} )` }}
    >
      <div className="flex flex-col lg:flex-row mt-20">
        <div className="lg:w-1/2">
          <TitlePart
            Title="ABOUT uS"
            subTitle1="BULIDING DREMS WITH "
            highlight="R&R INFRA:"
            subTitle2="YOUR COMPLETE ENGINEERING SOLUTIONS"
            left={true}
          />
          <div data-aos="fade-up-right">
            <p className="text-base text-gray-700 my-5">
              Welcome to R&R Infra, where we transform dreams into tangible
              realities. Our expertise spans modern construction concepts,
              customized fiberglass product design and manufacturing, and
              comprehensive water engineering solutions. We are your go-to team
              for architectural and engineering services that bring your visions
              to life.
            </p>
            <p className="text-base text-gray-700 my-5">
              Our talented design team and skilled technical experts ensure
              top-notch quality and integrate modern technological advancements
              in every product. We offer a diverse range of options, including
              fountains, water features, swimming pools, and luxurious port
              homes. We take pride in developing unique solutions inspired by
              your ideas and various leads.
            </p>
            <p className="text-base text-gray-700 my-5">
              At R&R Infra, our services extend to structural homes and
              horticultural projects. With seven years of industry experience,
              we've delivered iconic products and completed remarkable projects
              across the globe. Join us on our journey of excellence, as we
              continue to set new standards in the industry.
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 mt-10 lg:mt-0 lg:ml-10 flex justify-end pr-10">
          <div className="rounded-r-xl overflow-hidden" data-aos="fade-up-left">
            <Image
              src={image}
              alt="R&R Infra Project"
              height={400}
              className="object-cover rounded-r-xl w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
