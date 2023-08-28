import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div id='contact'>
      <a
        href='mailto:sanjaikumar4773@gmail.com'
        className='text-blue-600 hover:text-blue-800'
      >
        sanjaikumar4773@gmail.com
      </a>
      <div>+91812478009</div>
      <a href='https://www.linkedin.com/in/sanjai-kumar' target='_blank'>
        <Image
          src='/linkedin.png'
          title='LinkedIn'
          alt='LinkedIn'
          width='20'
          height='20'
        />
      </a>
    </div>
  );
};

export default Contact;
