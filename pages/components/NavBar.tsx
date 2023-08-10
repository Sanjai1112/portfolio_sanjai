import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='grid grid-cols-2 items-baseline font-semibold text-sm md:text-base'>
      <h1 className='cursor-pointer justify-self-start'><a href="#home">Sanjai.dev</a></h1>
      <div className='justify-self-end mobile:hidden'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400'
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z' />
          </svg>
        </button>
      </div>
      <ul className={`absolute right-1.5 mt-10 ${isOpen ? 'block' : 'hidden'} mobile:mt-0 mobile:relative mobile:grid mobile:grid-cols-4 mobile:justify-self-auto mobile:gap-x-4`}>
        <li className='cursor-pointer justify-self-start'><a href="#home">Home</a></li>
        <li className='cursor-pointer justify-self-start'><a href="#about">About</a></li>
        <li className='cursor-pointer justify-self-start'><a href="#works">Works</a></li>
        <li className='cursor-pointer justify-self-start'><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};
export default NavBar;
