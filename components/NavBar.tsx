import React, { useState } from "react";

const NavBar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='grid grid-cols-[120px_auto] items-baseline font-semibold text-sm min-[850px]:text-base sticky top-0 z-50 py-1 px-4 rounded text-slate-700 bg-slate-50/90 backdrop-blur-sm ring-1 ring-slate-900/10'>
      <h1 className='cursor-pointer justify-self-start'>
        <a href='#home'>Sanjai.dev</a>
      </h1>
      <div className='justify-self-end md:hidden'>
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
      <ul
        className={`absolute right-1.5 transition-all ${
          isOpen ? "block top-12 bg-slate-200/90 backdrop-blur-sm w-24 h-[124px] [&>*]:mt-2 text-center rounded before:content-['▼'] before:text-gray-500 before:text-xl before:absolute before:top-[-19px] before:right-5" : "hidden"
        } md:relative md:grid md:grid-cols-5 md:gap-x-4 justify-self-end`}
      >
        <li className='cursor-pointer justify-self-start'>
          <a href='#home'>Home</a>
        </li>
        <li className='cursor-pointer justify-self-start'>
          <a href='#about'>About</a>
        </li>
        <li className='cursor-pointer justify-self-start'>
          <a href='#works'>Works</a>
        </li>
        {/* <li className='cursor-pointer justify-self-start'>
          <a href='#projects'>Projects</a>
        </li> */}
        <li className='cursor-pointer justify-self-start'>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
