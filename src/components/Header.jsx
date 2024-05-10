import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import { logo } from '../assets';
import { Link } from 'react-router-dom';
import { Menu, NavBar } from '../subComponents';
import { motion } from 'framer-motion';

const Header = () => {
    const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 480;
      setIsScrolled(scrollPosition > threshold);}
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
  }, []);
  return (
    <motion.header
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      initial="bg-transparent"
      animate={isScrolled ? 'bg-white' : 'bg-transparent'}
      className={`fixed top-0 left-0 z-10 w-full shadow-xl border-b-[3px] border-[#495057] ${isScrolled?"bg-white":"bg-transparent"}`}
    >
      <div
        data-aos="fade-down"
        data-aos-duration="2000"
        className="flex justify-between items-center py-4 px-8"
      >
        <Link to="/home">
          <img src={logo} alt="logo" className="w-32" />
        </Link>
        <NavBar />
        <Menu />
      </div>
    </motion.header>
  );
};

export default Header;
