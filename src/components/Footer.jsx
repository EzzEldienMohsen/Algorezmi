import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="border-t-8 border-l-8  border-r-8 border-[#00000032] bg-[#222222] px-4 py-2 flex flex-col justify-between items-start">
      <h1 className="capitalize text-white font-Nunito font-medium tracking-normal text-xl md:text-2xl lg:text-3xl mb-4">
        contact us
      </h1>
      <p className="text-white hover:text-[#0d6efd] font-Nunito font-light text-md md:text-lg lg:text-xl mb-2">
        +201007502850
      </p>
      <p className="text-white hover:text-[#0d6efd] font-Nunito font-light text-md md:text-lg lg:text-xl mb-4">
        info@algorezmi.com
      </p>
      <ul className="flex justify-evenly list-none font-Nunito gap-5">
        <li className="text-white hover:text-[#0d6efd] text-md md:text-lg lg:text-xl font-Nunito tracking-wide capitalize">
          <Link to="/">home</Link>
        </li>
        <li className="text-white hover:text-[#0d6efd] text-md md:text-lg lg:text-xl font-Nunito tracking-wide capitalize">
          <Link to="/">about us</Link>
        </li>
        <li className="text-white hover:text-[#0d6efd] text-md md:text-lg lg:text-xl font-Nunito tracking-wide capitalize">
          <Link to="/">our projects</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
