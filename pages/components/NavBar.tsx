import React from "react";

const NavBar = () => {
  return (
    <nav className='grid grid-cols-2 font-semibold'>
      <h1 className='cursor-pointer justify-self-start'>Sanjai.dev</h1>
      <ul className='grid grid-cols-4 md:justify-self-auto md:gap-x-4'>
        <li className='cursor-pointer justify-self-start'>Home</li>
        <li className='cursor-pointer justify-self-start'>About</li>
        <li className='cursor-pointer justify-self-start'>Works</li>
        <li className='cursor-pointer justify-self-start'>Contact</li>
      </ul>
    </nav>
  );
};
export default NavBar;
