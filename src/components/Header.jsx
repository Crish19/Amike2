import React from 'react';
import logo from '../media/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='p-4 flex flex-col items-center md:flex-row justify-between md:items-center md:flex-wrap'>
      <Link to="/" className='flex items-center gap-2 mb-2 md:mb-0'>
        <img src={logo} alt='Amike logo' className="w-12 h-12 md:w-16 md:h-16" />
        <span className='text-gray-500 font-bold text-3xl md:text-4xl'>AMIKE</span>
      </Link>
      <nav className='mt-2 md:mt-0 flex flex-col md:flex-row items-center gap-6 md:gap-10 text-gray-900'>
        <Link to='/tour' className='mr-4'>Why Us</Link>
        <Link to='/stockholm' className='mr-4'>Tours</Link>
        <Link to='/about' className='mr-4'>About</Link>
      </nav>
    </header>
  );
}

export default Header;