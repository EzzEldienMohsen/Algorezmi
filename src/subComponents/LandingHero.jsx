import React from "react";
import  AOS  from 'aos';
import { mobile, web } from "../assets";
import { Link } from "react-router-dom";

const LandingHero = () => {
  React.useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div className="illusion flex flex-col justify-center items-center px-5 py-10">
      <h2 className="motion text-white font-Nunito font-semibold tracking-wider text-2xl md:text-3xl lg:text-5xl text-center">
        We Transform Your Unique Ideas Into Mobile And Web Apps That Get The Job
        Done.
      </h2>
      <div className="mt-4 md:mt-6 flex justify-center items-center gap-10">
        <Link to="/">
          <div
            data-aos="zoom-out-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="bg-white p-4 flex flex-col justify-center items-center shadow-lg"
          >
            <img src={mobile} alt="mobile" />
            <h1 className="font-Nunito font-light text-black capitalize text-md md:text-lg lg:text-xl">
              mobile apps
            </h1>
          </div>
        </Link>
        <Link to="/">
          <div
            data-aos="zoom-out-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="bg-white p-4 flex flex-col justify-center items-center shadow-lg"
          >
            <img src={web} alt="mobile" />
            <h1 className="font-Nunito font-light text-black capitalize text-md md:text-lg lg:text-xl">
              web apps
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LandingHero