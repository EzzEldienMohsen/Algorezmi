import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import { logo } from '../assets';
import { Link } from 'react-router-dom';
import { Menu, NavBar } from '../subComponents';

const Header = () => {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="fixed top-0 left-0 z-10 w-full shadow-xl border-b-[3px] border-[#495057]">
      <div
        data-aos="fade-down"
        data-aos-duration="2000"
        className="flex justify-between items-center py-4 px-8"
      >
        <Link to="/home">
          <img src={logo} alt="logo" className="w-32" />
        </Link>
        <NavBar />
        <Menu/>
      </div>
    </div>
  );
};

export default Header;
