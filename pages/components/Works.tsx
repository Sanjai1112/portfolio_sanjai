import React from "react";

const Works = () => {
  return (
    <main className='relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden'>
      <div className='w-full max-w-6xl mx-auto px-4 md:px-6'>
        <div className='flex flex-col justify-center'>
          <div className='w-full max-w-3xl mx-auto'>
            {/* Container */}
            <div>
              {/* Timeline Item */}
              <div className='relative pl-8 lg:pl-32 py-6'>
                {/* Purple label  */}
                <div className='font-caveat font-medium md:text-lg lg:text-xl xl:text-2xl text-indigo-500 mb-1 lg:mb-0'>
                  Zumen Technologies
                </div>
                {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after)  */}
                <div className='flex flex-col lg:flex-row items-start mb-1 before:absolute before:left-2 lg:before:left-0 before:h-full before:px-px before:bg-slate-300 lg:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 lg:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full lg:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5'>
                  <time className='lg:absolute -left-28 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-48 h-6 mb-3 lg:mb-0 text-emerald-600 bg-emerald-100 rounded-full'>
                    Jul 2021 To Present
                  </time>
                  <div className='md:text-base lg:text-lg xl:text-xl font-bold text-slate-900'>
                    Full Stack Developer
                  </div>
                </div>
                {/* Content  */}
                <div className='text-slate-500 text-xs md:text-sm lg:text-sm xl:text-base'>
                  <p>
                    Worked in Various Micro Services and constructed many
                    RESTfull APIs to build robust features for product
                    enhancements. Developed notable asynchronous modules using
                    Apache Kafka and Redis Cache and Reactive Programming
                    concepts to ease the user's non blocking activities and
                    parallel processing of business logic. Developed a micro
                    service which mainly integrates the product with external
                    systems like ERP and PLM to read and write procurement data
                    into the system based on client needs.
                  </p>
                  <p className="mt-2">
                    <i className="not-italic font-semibold">Skills:</i> Microservices &middot; Spring Boot &middot;
                    ReactJs &middot; Redux &middot; PostgreSql &middot; MongoDB
                    &middot; Apache Kafka &middot; Redis &middot; REST API'S
                    &middot; Reactive Programming &middot; GraphQl&middot;
                    Docker &middot; Kubernetes.
                  </p>
                </div>
              </div>
              <div className='relative pl-8 lg:pl-32 py-6'>
                {/* Purple label  */}
                <div className='font-caveat font-medium md:text-lg lg:text-xl xl:text-2xl text-indigo-500 mb-1 lg:mb-0'>
                  Zoho Corporation
                </div>
                {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after)  */}
                <div className='flex flex-col lg:flex-row items-start mb-1 before:absolute before:left-2 lg:before:left-0 before:h-full before:px-px before:bg-slate-300 lg:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 lg:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full lg:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5'>
                  <time className='lg:absolute -left-28 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-48 h-6 mb-3 lg:mb-0 text-emerald-600 bg-emerald-100 rounded-full'>
                    Sep 2019 To Jan 2021
                  </time>
                  <div className='md:text-base lg:text-lg xl:text-xl font-bold text-slate-900'>
                    Member Technical Staff
                  </div>
                </div>
                {/* Content  */}
                <div className='text-slate-500 text-xs md:text-sm lg:text-sm xl:text-base'>
                  <p>
                    Developed a web app for E-Mail Campaign to ease marketing
                    team sales target. Developed an analytical web app which
                    provides detail representation of leads and customers and
                    customers generated via which funneling process for a
                    marketing team by integrating Zoho CRM. Developed a web app
                    to view revenue details generated from a campaign and
                    amounts spent for campaign by integrating Zoho CRM and
                    Google Adsense.
                  </p>
                  <p className="mt-2">
                    <i className="not-italic font-semibold">Skills:</i> Core Java &middot; Servlets &middot;
                    PostgreSQL &middot; XML &middot; HTML5 &middot; Javascript
                    &middot; Semantic UI &middot; Bootstrap.
                  </p>
                </div>
              </div>
              <div className='relative pl-8 lg:pl-32 py-6 group'>
                {/* Purple label  */}
                <div className='font-caveat font-medium md:text-lg lg:text-xl xl:text-2xl text-indigo-500 mb-1 lg:mb-0'>
                  Scapic
                </div>
                {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after)  */}
                <div className='flex flex-col lg:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 lg:before:left-0 before:h-full before:px-px before:bg-slate-300 lg:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 lg:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full lg:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5'>
                  <time className='lg:absolute -left-28 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-48 h-6 mb-3 lg:mb-0 text-emerald-600 bg-emerald-100 rounded-full'>
                    Jan 2019 To Apr 2019
                  </time>
                  <div className='md:text-base lg:text-lg xl:text-xl font-bold text-slate-900'>
                    MERN Developer-Intern
                  </div>
                </div>
                {/* Content  */}
                <div className='text-slate-500 text-xs md:text-sm lg:text-sm xl:text-base'>
                  <p>
                    Worked as a internee in MERN stack and A-Frame to render 3D
                    objects in browsers to show all perspective views of an
                    object for end user/customer who want to embed that object
                    in their site in AR perspective.
                  </p>
                  <p className="mt-2">
                    <i className="not-italic font-semibold">Skills:</i> Redux.js &middot; REST APIs &middot; A-Frame
                    (Virtual Reality Framework) &middot; Node.js &middot;
                    React.js &middot; MongoDB.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Works;
