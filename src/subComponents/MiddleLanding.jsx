import React from "react";
import { mobile2, web2 } from "../assets";
import  AOS  from 'aos';

const MiddleLanding = () => {
    React.useEffect(()=>{
        AOS.init()
    },[])
  return (
    <div className="bg-[#28283f] px-4 py-6 flex flex-col justify-center items-center text-white">
      <div className="theImage flex flex-col justify-center items-center my-6  p-8 w-full">
        <h1
          data-aos="zoom-out-up"
          data-aos-duration="2000"
          className="font-Nunito text-[white] text-xl md:text-2xl lg:text-4xl mb-4 capitalize font-bold"
        >
          What We Offer
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="2000"
          className="font-Nunito text-[white] text-lg md:text-xl mb-8 capitalize lg:text-2xl font-medium"
        >
          Rooted in mutual understanding and effective collaboration, our
          result-oriented teams offer these services to clients globally.
        </p>
        <div
          data-aos="fade-down-right"
          data-aos-easing="ease-in-back"
          data-aos-delay="2000"
          className="flex justify-between mb-4 items-center border-[#052c65] shadow-xl border-2 px-4 py-2 rounded-md"
        >
          <img src={mobile2} alt="alt" className="w-20 md:w-32 lg:w-40" />
          <div className="flex flex-col justify-between items-start md:w-3/5 ">
            <h1 className="text-[white] font-bold mb-2 md:mb-4 font-Nunito text-lg md:text-xl lg:text-2xl">
              MOBILE DEVELOPMENT
            </h1>
            <p className="text-[white] font-light font-Nunito text-md md:text-lg lg:text-xl">
              Equipped to deliver user-centric native and cross-platform mobile
              applications that work seamlessly across smartphones and
              wearables.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up-left"
          data-aos-easing="ease-in-back"
          data-aos-delay="2000"
          className="flex justify-between flex-row-reverse items-center shadow-xl border-[#052c65] border-2 px-4 py-2 rounded-md"
        >
          <img src={web2} alt="alt" className="w-20 md:w-32 lg:w-40" />
          <div className="flex flex-col justify-between items-start md:w-3/5">
            <h1 className="text-[white] font-bold mb-2 md:mb-4 font-Nunito text-lg md:text-xl lg:text-2xl">
              WEB DEVELOPMENT
            </h1>
            <p className="text-[white] font-light font-Nunito text-md md:text-lg lg:text-xl">
              Leverage modern web frameworks to develop and deploy feature-rich
              web apps that digitize your business services, expand your reach,
              and excel among competitors.
            </p>
          </div>
        </div>
      </div>
      <img
        src="https://algorezmi.com/wp-content/uploads/2023/03/app-19.png"
        alt="image"
      />
    </div>
  );
}

export default MiddleLanding