import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const LastLandingPart = () => {
  return (
    <div className="flex justify-center items-center shadow-inner p-12 bg-white rounded-sm">
      <div className="bg-[#28283f] flex flex-col justify-between items-center motion w-[80vw] rounded-md shadow-2xl px-8 py-6 ">
        <h1 className="text-[#0C71C3] font-Nunito text-lg text-start md:text-center md:text-2xl lg:text-3xl tracking-wide font-bold">
          Ready To Take Your Business To Another Level ?
        </h1>
        <p className="text-white font-Nunito font-normal text-sm md:text-lg lg:text-xl text-start md:text-center my-6">
          Regardless of whether you have a specific idea in mind or if you’re
          seeking guidance to shape your vision, our exceptional consulting team
          will walk alongside you, step by step, to help you achieve your goals
          and foster the growth of your brand.
        </p>
        <a href="mailto:info@algorezmi.com">
          <button className="bg-black tracking-wider justify-center items-center text-white py-2 px-4 rounded-lg font-Nunito font-light capitalize flex gap-3">
            get started
            <MdOutlineKeyboardArrowRight className='text-2xl' />
          </button>
        </a>
      </div>
    </div>
  );
};

export default LastLandingPart;
