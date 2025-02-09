import React from 'react';

const Projects = () => {
  return (
    <div>
      <div id="Projects" className="flex justify-center items-center mt-5">
        <h1 className="text-yellow-500 font-bold text-4xl md:text-6xl">Projects</h1>
      </div>

      <div className="flex flex-col items-center md:px-16 mt-10">
        {/* Project 1 */}
        <div className="flex flex-col md:flex-row items-start justify-between w-full">
          <h2 className="mb-3 font-semibold text-center text-2xl">1. College Bus Live Tracking System</h2>
          <a
            href="https://ai2.appinventor.mit.edu/#6694402763128832"
            className="underline font-semibold text-nowrap"
          >
            Source Code
          </a>
        </div>
        <ul className="list-disc w-full text-justify">
          <li className="ml-7 font-sans font-normal">
            Developed an Android-based live tracking system that does not rely on GPS modules, allowing secure location sharing for registered users.
          </li>
          <li className="ml-7 font-sans font-normal">
            Implemented password-protected access to restrict location sharing to authorized users only.
          </li>
          <li className="ml-7 font-sans font-normal">
            Configured the client to act as a server, uploading location coordinates to Firebase for cloud-based real-time location sharing.
          </li>
          <li className="ml-7 font-sans font-normal">
            Utilized Firebase’s database capabilities to effectively manage the location-sharing framework, ensuring secure and efficient connectivity among clients.
          </li>
        </ul>
        <br />
        {/* Project 2 */}
        <div className="flex flex-col md:flex-row items-start justify-between w-full">
          <h2 className="mb-3 font-semibold text-center text-2xl">2. Python Call Center Logging</h2>
          <a
            href="https://github.com/Narasimha57/Narasimha57-pep-pythonSQL-project"
            className="underline font-semibold text-nowrap"
          >
            Source Code
          </a>
        </div>
        <ul className="list-disc w-full text-justify">
          <li className="ml-7 font-sans font-normal">
            Architected and implemented a robust backend data management system for call center operations streamlining data analysis workflows
          </li>
          <li className="ml-7 font-sans font-normal">
            Developed RESTful APIs to process user metrics and call performance data, delivering real-time analytics and custom reporting capabilities.
          </li>
          <li className="ml-7 font-sans font-normal">
            Engineered an efficient ETL pipeline to transform CSV data into SQLite database, reducing data processing time
          </li>
          <li className="ml-7 font-sans font-normal">
            Implemented automated data export functionality with parameterized reporting, enabling actionable insights for stakeholders
          </li>
          <h4 className='ml-7'><b>Technologies used: </b>Python, SQL.</h4>
        </ul>
        <br />
        {/* Project 3 */}
        <div className="flex flex-col md:flex-row  justify-between w-full">
          <h2 className="mb-3 font-semibold text-center text-2xl">3. Quiz App</h2>
          <a
            href="#"
            className="underline font-semibold text-nowrap items-end"
          >
            Source Code
          </a>
        </div>
        <ul className="list-disc w-full text-justify">
          <li className="ml-7 font-sans font-normal">
            Secure login for admins and users.
          </li>
          <li className="ml-7 font-sans font-normal">
            Implemented password-protected access to restrict location sharing to authorized users only.
          </li>
          <li className="ml-7 font-sans font-normal">
            Intuitive admin dashboard for managing users and quizzes.
          </li>
          <li className="ml-7 font-sans font-normal">
            Robust user management with CRUD functionalities.
          </li>
          <li className="ml-7 font-sans font-normal">
            Support for multiple-choice and fill-in-the-blank questions, draft saving, real-time previews, and publishing.
          </li>
          <li className="ml-7 font-sans font-normal">
            Users can access assigned quizzes with results securely stored
          </li>
          <h4 className='ml-7'><b>Technologies used: </b>HTML5, CSS3, JavaScript, React.Js, Localstorage.</h4>
        </ul>
        <br />
      </div>
    </div>
  );
};

export default Projects;
