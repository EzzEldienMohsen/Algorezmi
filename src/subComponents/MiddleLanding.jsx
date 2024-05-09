import { mobile2 } from "../assets";

const MiddleLanding = () => {
  return (
    <div className="bg-[#28283f] px-4 py-6 flex flex-col justify-center items-center text-white">
      <div className="theImage flex flex-col justify-center items-center my-6  p-8 w-full">
        <h1 className="font-Nunito text-[#0d6efd] text-xl md:text-2xl lg:text-3xl mb-4 capitalize font-bold">
          What We Offer
        </h1>
        <p className="font-Nunito text-[#0d6efd] text-lg md:text-xl mb-4 capitalize lg:text-2xl font-medium">
          Rooted in mutual understanding and effective collaboration, our
          result-oriented teams offer these services to clients globally.
        </p>
        <div className="flex justify-between mb-4 items-center border-[#052c65] border-2 px-4 py-2 rounded-md">
          <img src={mobile2} alt="alt" className="w-20 md:w-32 lg:w-40" />
          <div className="flex flex-col justify-between items-start md:w-3/5 ">
            <h1 className="text-[#0d6efd] font-bold font-Nunito text-lg md:text-xl lg:text-2xl">
              MOBILE DEVELOPMENT
            </h1>
            <p className="text-[#0d6efd] font-light font-Nunito text-md md:text-lg lg:text-xl">
              Equipped to deliver user-centric native and cross-plateform mobile
              applications that work seamlessly across smartphones and
              wearables.
            </p>
          </div>
        </div>
        <div className="flex justify-between flex-row-reverse items-center border-[#052c65] border-2 px-4 py-2 rounded-md">
          <img src={mobile2} alt="alt" className="w-20 md:w-32 lg:w-40" />
          <div className="flex flex-col justify-between items-start md:w-3/5">
            <h1 className="text-[#0d6efd] font-bold font-Nunito text-lg md:text-xl lg:text-2xl">
              MOBILE DEVELOPMENT
            </h1>
            <p className="text-[#0d6efd] font-light font-Nunito text-md md:text-lg lg:text-xl">
              Equipped to deliver user-centric native and cross-plateform mobile
              applications that work seamlessly across smartphones and
              wearables.
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