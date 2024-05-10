import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { aboutProcess } from '../assets';

const AboutMiddle = () => {
    React.useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  return (
    <div className="process flex flex-col justify-center items-center p-8 shadow-inner bg-wite mt-2">
      <h1 className="font-Nunito mb-4 font-bold text-[black] text-xl md:text-2xl lg:text-3xl capitalize tracking-wide">
        Development Process
      </h1>
      <p className="text-md md:text-lg lg:text-xl font-Nunito font-light capitalize mb-6">
        Our approach is centered around collaboration and client satisfaction.
        We believe in understanding your vision and goals to create solutions
        that truly reflect your brand identity.
      </p>
      <div className="motion flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 px-4 py-2 shadow-inner rounded-md">
        {aboutProcess.map((card) => {
          return (
            <div
              data-aos="flip-up"
              data-aos-duration="3000"
              key={card.id}
              className="py-6 mb-4 md:mb-0 md:h-[250px] lg:h-[400px] bg-white rounded-lg px-3 flex flex-col gap-4 md:odd:flex-row md:even:flex-row-reverse shadow-2xl md:gap-4 md:justify-center md:items-center justify-stretch items-center border-2 border-[#0C71C3]"
            >
              <img src={card.image} alt="icon" />
              <div className="flex flex-col justify-start items-center">
                <h1 className=" md:mb-8 text-ms md:text-lg lg:text-xl font-Nunito font-semibold text-black tracking-wide">
                  {card.title}
                </h1>
                <p className="text-sm md:text-md lg:text-lg font-Nunito font-normal text-black ">
                  {card.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutMiddle