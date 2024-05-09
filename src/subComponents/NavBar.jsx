import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <ul className="hidden lg:flex justify-evenly list-none font-Nunito gap-5">
      <li className="text-[#00000099] hover:text-[#0d6efd] text-2xl font-Nunito tracking-wide capitalize">
        <Link to="/">about us</Link>
      </li>
      <li className="text-[#00000099] hover:text-[#0d6efd] text-2xl font-Nunito tracking-wide capitalize">
        <Link to="/">our projects</Link>
      </li>
    </ul>
  );
};

export default NavBar;
