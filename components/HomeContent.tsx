import React from "react";
import Image from "next/image";

const HomeContent = () => {
  return (
    <div className='mt-12 mb-8' id='home'>
      <section className='mb-2'>
        <h1 className='font-semibold text-xl md:text-2xl xl:text-3xl'>
          Full Stack Developer.<i className='not-italic'>👋🏼</i>
        </h1>
        <p className='text-gray-500 text-sm md:text-lg xl:text-xl'>
          Hi, I'm Sanjai Kumar Alagarsamy. I'm from a city that never
          sleeps(Thoonga nagaram) called Madurai📍.
        </p>
        {/* <Image src='/3d_man_image.jpg' alt='LinkedIn' width='100' height='100' /> */}
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
        <i className='not-italic text-gray-500 mt-1 text-sm md:text-base'>
          Tech Stacks:
        </i>
        <div className='flex gap-x-4 gap-y-4 flex-[3_1_0] justify-evenly flex-wrap'>
          <Image
            src='/java.png'
            title='Java'
            alt='Java'
            width='40'
            height='40'
          />
          <Image
            src='/spring-boot-logo.png'
            title='Spring Boot'
            alt='Spring Boot'
            width='60'
            height='40'
          />
          <Image
            src='/reactjs.png'
            title='ReactJs'
            alt='React Js'
            width='40'
            height='40'
          />
          <Image
            src='/nodejs.png'
            title='NodeJs'
            alt='NodeJs'
            width='40'
            height='40'
          />
          <Image
            src='/mongoDb.jpeg'
            title='MongoDB'
            alt='MongoDB'
            width='40'
            height='40'
          />
          <Image
            src='/postgresql.png'
            title='PostgreSql'
            alt='PostgreSql'
            width='40'
            height='40'
          />
          <Image
            src='/html-5.png'
            title='HTML5'
            alt='HTML5'
            width='40'
            height='40'
          />
          <Image
            src='/css.png'
            title='CSS3'
            alt='CSS3'
            width='40'
            height='40'
          />
          <Image
            src='/js.png'
            title='Javascript'
            alt='Javascript'
            width='40'
            height='40'
          />
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
