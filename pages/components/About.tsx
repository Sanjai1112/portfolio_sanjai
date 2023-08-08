import React from "react";

const About = () => {
  return (
    <div>
      <p>
        A Software Developer with 4 years of experience in SASS Products.
        Developed numerous functionalities to ease the end users interactions
        with the product. A dedicated professional who is passionate about
        crafting robust, efficient, and user- friendly software solutions.
      </p>
      <a
        href='/Sanjai Kumar-A.pdf'
        target='_blank'
        download='Sanjai Kumar A'
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Download Resume
      </a>
      <div>
        <h4>Skills</h4>
        <ul className='list-disc'>
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
      <hr/>
    </div>
  );
};

export default About;
