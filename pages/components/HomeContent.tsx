import Image from "next/image";
import React from "react";

const HomeContent = () => {
  return (
    <div className='mt-12 mb-8' id="home">
      <section className="mb-2">
        <h1 className='font-semibold text-xl md:text-2xl xl:text-3xl'>
          Full Stack Developer.<i className='not-italic'>👋🏼</i>
        </h1>
        <p className='text-gray-500 text-sm md:text-lg xl:text-xl'>
          Hi, I'm Sanjai Kumar Alagarsamy. I'm from a city that never
          sleeps(Thoonga nagaram) called Madurai📍.
        </p>
        {/* <img src='/3d_man_image.jpg' alt='LinkedIn' style={{width: '30rem', height: '20rem'}} /> */}
      </section>
      <section className='flex gap-x-3 mb-2'>
        <a href='https://www.linkedin.com/in/sanjai-kumar' target='_blank'>
          <Image
            src='/linkedin.png'
            title='LinkedIn'
            alt='LinkedIn'
            width='20'
            height='20'
          />
        </a>
        <a href='https://github.com/sanjai1112' target='_blank'>
          <Image
            src='/github.png'
            title='Github'
            alt='Github'
            width='20'
            height='20'
          />
        </a>
      </section>
      <section className='flex flex-col md:flex-row md:items-center'>
        <i className="not-italic text-gray-500 mt-1 text-sm md:text-base underline">Tech Stacks:</i>
        <div className='flex gap-x-4 gap-y-4 flex-[3_1_0] justify-evenly flex-wrap'>
          <img
            src='/java.png'
            title='Java'
            alt='Java'
            className='w-10 h-10'
          />
          <img
            src='/spring-boot-logo.png'
            title='Spring Boot'
            alt='Spring Boot'
            className='w-16 h-10'
          />
          <img
            src='/reactjs.png'
            title='ReactJs'
            alt='ReactJs'
            className='w-10 h-10'
          />
          <img
            src='/nodejs.png'
            title='NodeJs'
            alt='NodeJs'
            className='w-10 h-10'
          />
          <img
            src='/mongoDb.jpeg'
            title='MongoDB'
            alt='MongoDB'
            className='w-10 h-10'
          />
          <img
            src='/postgresql.png'
            title='PostgreSql'
            alt='PostgreSql'
            className='w-10 h-10'
          />
          <img
            src='/html-5.png'
            title='HTML5'
            alt='HTML5'
            className='w-10 h-10'
          />
          <img src='/css.png' title='CSS3' alt='CSS3' className='w-10 h-10' />
          <img
            src='/js.png'
            title='Javascript'
            alt='Javascript'
            className='w-10 h-10'
          />
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
