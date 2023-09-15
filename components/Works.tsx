import React from "react";

const Works = (): JSX.Element => {
  return (
    <section className='relative min-h-screen overflow-hidden mb-8' id="works">
      <h1 className=" text-gray-500 mb-4">My Works:</h1>
      <main className='w-full max-w-6xl mx-auto px-4 md:px-6'>
        <div className='flex flex-col justify-center'>
          <div className='w-full max-w-3xl mx-auto'>
            {/* Container */}
            <div>
              {/* Timeline Item */}
              <div className='relative pl-8 lg:pl-32 pb-6'>
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
                <div className='text-gray-500 text-xs md:text-sm lg:text-sm xl:text-base'>
                  <ul className="[&>*]:mb-2">
                    <li>
                      <em className="font-semibold">Engineered a Framework</em> for integration with <em className="font-bold">ERP and PLM</em> using <em className="font-bold">Reactive Programming</em>, which ease
                      the core business processes between the systems.
                    </li>
                    <li>
                      <em className="font-bold">Implemented a stream line</em> process using <em className="font-bold">Kafka and Redis</em> for orchestrating the application processes
                      from <em className="font-bold">RFP to PO</em> for data from ERP dump.
                    </li>
                    <li>
                      <em className="font-bold">Parallelised single threaded logic</em> to reduce the processing time of dumping quotations by <em className="font-bold">more than
                        ∼50%</em>.
                    </li>
                    <li>
                      <em className="font-bold">Developed a dynamic configurable quotation templates</em> with help of <em className="font-bold">Ag-Grid and PostgreSQL.</em>
                    </li>
                    <li>
                      <em className="font-bold">Designed and Developed the front-end</em> for various modules using <em className="font-bold">React.js, Redux, AgGrid, AntDesign.</em>
                    </li>
                    <li>
                      <em className="font-bold">Designed and Developed various RESTful APIs</em> to build robust features for product enhancements.
                    </li>
                    <li>
                      <em className="font-bold">Collaborated</em> with product managers, customers, and customer success team <em className="font-bold">to design and incorporate
                        features that addressed customer pain points.</em>
                    </li>
                    <li>
                      <em className="font-bold">Ensured code quality</em> by code reviews and <em className="font-bold">improved test coverage by writing unit and integration
                        tests.</em> Nurtured junior developers via <em className="font-bold">knowledge transfer.</em>
                    </li>
                  </ul>
                  <p className="mt-4">
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
                <div className='text-gray-500 text-xs md:text-sm lg:text-sm xl:text-base'>
                  <ul className="[&>*]:mb-2">
                    <li><em className="font-bold">Engineered an analytical platform</em> to find <em className="font-bold">various types of leads</em> like cross sell leads with help of Zoho
                      CRM.</li>
                    <li><em className="font-bold">Designed and Developed</em> modules in <em className="font-bold">email campaign service by integrating with Zoho CRM.</em></li>
                    <li><em className="font-bold">Developed a tool</em> to track <em className="font-bold">Google AdWords</em> which helped in <em className="font-bold">earch Engine Marketing and increased
                      sales.</em></li>
                  </ul>
                  <p className="mt-4">
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
                <div className='text-gray-500 text-xs md:text-sm lg:text-sm xl:text-base'>
                  <ul className="[&>*]:mb-2">
                    <li><em className="font-bold">Worked in MERN stack and A-Frame in No-code 3D development platform</em> which allowed e-commerce
                      businesses to develop and embed a augmented view of items in their site.</li>
                    <li><em className="font-bold">Worked in both bug fixing and manual testing</em> of certain modules of the product.</li>
                  </ul>
                  <p className="mt-4">
                    <i className="not-italic font-semibold">Skills:</i> Redux.js &middot; REST APIs &middot; A-Frame
                    (Virtual Reality Framework) &middot; Node.js &middot;
                    React.js &middot; MongoDB.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Works;
