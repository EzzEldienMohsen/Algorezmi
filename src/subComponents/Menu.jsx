import { HiBars3 } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="dropdown dropdown-end lg:hidden">
      <div tabIndex={0} role="button" className="m-1 text-[#0dcaf0]">
        <HiBars3 className="text-5xl text-[#0dcaf0]" />
      </div>
      <ul
        data-aos="zoom-out-up"
        data-aos-duration="400"
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow-xl bg-base-100 rounded-box w-[95vw]"
      >
        <li className="text-[#00000099] hover:text-[#0d6efd] text-lg font-Nunito tracking-wide capitalize">
          <Link to="/">about us</Link>
        </li>
        <li className="text-[#00000099] hover:text-[#0d6efd] text-lg font-Nunito tracking-wide capitalize">
          <Link to="/">our projects</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu