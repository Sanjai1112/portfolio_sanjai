import React, { useEffect, useState } from "react";
import Image from "next/image";

type Opacity = {
  opacity: number;
}

const About = (): JSX.Element => {
  const [intro, setIntro] = useState<Opacity>({opacity: 0});
  useEffect(() => {
    const id1 = setTimeout(() => {
      setIntro({opacity: 1});
    }, 350);

    return () => clearTimeout(id1);
  },[]);
  return (
    <section id='about' className='flex flex-col gap-y-4 mb-8'>
      <div className='flex flex-col mobile:flex-row gap-x-4 gap-y-4 md:gap-x-12'>
        <div className='flex-1 w-80 self-center mobile:w-full'>
          <Image src='/my_image.jpg' alt='My Image' className='rounded' width='466' height='555'/>
        </div>
        <div className='flex flex-col flex-[2_1_0%] justify-evenly gap-y-4 transition-opacity' style={intro}>
          <p className='text-sm md:text-base'>
            A Software Developer with 4 years of experience in SASS Products.
            Developed numerous functionalities to ease the end users
            interactions with the product. A dedicated professional who is
            passionate about crafting robust, efficient, and user- friendly
            software solutions.
          </p>
          <div className='text-sm md:text-base hidden xl:block'>
            <h4 className='text-gray-500'>Skills:</h4>
            <ul className='list-disc ml-4'>
              <li>Spring Boot</li>
              <li>Java Servlet and JSP</li>
              <li>ReactJs</li>
              <li>NextJs</li>
              <li>NodeJs</li>
              <li>JavaScript</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Apache Kafka</li>
              <li>Redis Cache</li>
              <li>Reactive Programming</li>
              <li>Git</li>
            </ul>
          </div>
          <a
            href='/Sanjai Kumar-A.pdf'
            target='_blank'
            download='Sanjai Kumar A'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm p-2 md:px-4 rounded text-center mobile:self-start'
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className='text-sm md:text-base xl:hidden px-4 transition-opacity' style={intro}>
        <p>
          <span className='text-gray-500 mr-4'>Skills:</span>
          Spring Boot &middot; Java Servlet and JSP &middot; ReactJs &middot;
          NextJs &middot; NodeJs &middot; JavaScript HTML5 &middot; CSS3
          &middot; PostgreSQL &middot; MongoDB &middot; Apache Kafka &middot;
          Redis Cache &middot; Reactive Programming &middot; Git
        </p>
        <ul className='list-disc ml-4'></ul>
      </div>
      <h1 className=" text-gray-500">My Coding platforms:</h1>
      <div className="flex justify-around">
        <a href="https://leetcode.com/sanjaialagar/" target="_blank" className="flex flex-col items-center gap-y-2">
          <Image src="/LeetCode.png" alt="LeetCode" title="LeetCode" width="40" height="100"/>
          <h2 className="text-sm">LeetCode</h2>
        </a>
        <a href="https://app.codesignal.com/profile/sanjai_a" target="_blank" className="flex flex-col items-center gap-y-2">
          <Image src="/codesignal.png" alt="CodeSignal" title="CodeSignal" width="48" height="100"/>
          <h2 className="text-sm">CodeSignal</h2>
        </a>
        <a href="https://www.hackerrank.com/sanjaikumar4773" target="_blank" className="flex flex-col items-center gap-y-2">
          <Image src="/hackerrank.png" alt="HackerRank" title="HackerRank" width="40" height="100"/>
          <h2 className="text-sm">HackerRank</h2>
        </a>
      </div>
    </section>
  );
};

export default About;
