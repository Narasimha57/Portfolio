import React from "react";

const Projects = () => {
  return (
    <div className="">
      <div id="Projects" className="flex justify-center items-center md:mt-0">
        <h1 className="text-yellow-500 font-bold text-4xl md:text-6xl">
          Projects
        </h1>
      </div>

      <div className="flex flex-col items-center md:px-16 mt-10">
        {/* Project 1 */}
        <div className="flex flex-col md:flex-row  justify-between w-full">
          <h2 className="mb-3 font-semibold text-center text-2xl">
            College Bus Live Tracking System
          </h2>
          <a
            href="https://ai2.appinventor.mit.edu/#6694402763128832"
            className="underline font-semibold text-nowrap text-center md:text-end"
          >
            Source Code
          </a>
        </div>
        <ul className="list-disc w-full text-justify px-2 md:px-0">
          <li className="ml-7 font-sans font-normal">
            Developed an Android-based live tracking system that does not rely
            on GPS modules, allowing secure location sharing for registered
            users.
          </li>
          <li className="ml-7 font-sans font-normal">
            Implemented password-protected access to restrict location sharing
            to authorized users only.
          </li>
          <li className="ml-7 font-sans font-normal">
            Configured the client to act as a server, uploading location
            coordinates to Firebase for cloud-based real-time location sharing.
          </li>
          <li className="ml-7 font-sans font-normal">
            Utilized Firebase’s database capabilities to effectively manage the
            location-sharing framework, ensuring secure and efficient
            connectivity among clients.
          </li>
        </ul>
        <br />
        <div className="flex flex-col md:flex-row  justify-between w-full">
          <h2 className="mb-3 font-semibold text-center text-2xl">ToDo List</h2>
          <a
            href="https://github.com/Narasimha57/ToDo_FullStack"
            className="underline font-semibold text-nowrap text-center md:text-end"
          >
            Source Code
          </a>
        </div>
        <ul className="list-disc w-full text-justify px-2 md:px-0">
          <li className="ml-7 font-sans font-normal">
            Developed a dynamic and responsive To-Do list application using the
            MERN stack, enabling users to create, update, delete, and mark tasks
            as complete.
          </li>
          <li className="ml-7 font-sans font-normal">
            Built a secure and scalable RESTful API using Node.js and Express.js
            to handle CRUD operations, enhancing backend performance and
            modularity.
          </li>
          <li className="ml-7 font-sans font-normal">
            Integrated MongoDB as the database to store user tasks and metadata,
            implementing Mongoose schemas for structured and efficient data
            handling.
          </li>
          <li className="ml-7 font-sans font-normal">
            Implemented user authentication and task persistence with JWT and
            MongoDB, ensuring secure access and data integrity across user
            sessions.
          </li>
          <li className="ml-7 font-sans font-normal">
            Technologies Used: HTML5, Tailwind CSS, JavaScript, React.js,
            Express.js, MongoDB, Node.js, Local Storage, Postman API, CORS
          </li>
        </ul>
        <br />

        <div className="flex flex-col md:flex-row  justify-between w-full">
          <h2 className="mb-3 font-semibold text-center text-2xl">
            Sports Management System
          </h2>
          <a
            href="https://github.com/Narasimha57/Sports_Management_System"
            className="underline font-semibold text-nowrap text-center md:text-end"
          >
            Source Code
          </a>
        </div>
        <ul className="list-disc w-full text-justify px-2 md:px-0">
          <li className="ml-7 font-sans font-normal">
            Developed a scalable Sports Management System using the MERN stack
            is designed to streamline the scheduling and coordination of
            sports-related activities and resources.
          </li>
          <li className="ml-7 font-sans font-normal">
            Implemented secure user authentication and role-based access control
            with JWT, ensuring data privacy and authorized access.
          </li>
          <li className="ml-7 font-sans font-normal">
            Designed and built responsive React.js interfaces for seamless user
            experience across desktops and mobile devices.
          </li>
          <li className="ml-7 font-sans font-normal">
            Technologies Used: HTML5, Tailwind CSS, JavaScript, React.js,
            Express.js, MongoDB, Node.js, Local Storage, Postman API, CORS.
          </li>
        </ul>
        <br />

        <div className="flex flex-col md:flex-row  justify-between w-full">
          <h2 className="mb-3 font-semibold text-center text-2xl">
            MERN Stack Blog Platform
          </h2>
          <a
            href="https://github.com/Narasimha57/FullStack_Blog_Project"
            className="underline font-semibold text-nowrap text-center md:text-end"
          >
            Source Code
          </a>
        </div>
        <ul className="list-disc w-full text-justify px-2 md:px-0">
          <li className="ml-7 font-sans font-normal">
            Developed a full-stack Blog application using the MERN stack
            (MongoDB, Express.js, React.js, Node.js) enabling users to create,
            edit, and delete blog posts with a responsive and intuitive UI.
          </li>
          <li className="ml-7 font-sans font-normal">
            Implemented secure user authentication and authorization using JWT
            and role-based access control to protect user data and manage
            permissions effectively
          </li>
          <li className="ml-7 font-sans font-normal">
            Designed and built RESTful APIs with Express.js and Node.js to
            handle CRUD operations, optimized with MongoDB and Mongoose for
            efficient data storage and retrieval
          </li>
          <li className="ml-7 font-sans font-normal">
            Integrated advanced features such as post categorization, filtering,
            and search functionality to enhance content discoverability and user
            engagement.
          </li>
          <li className="ml-7 font-sans font-normal">
            Technologies Used: HTML5, Tailwind CSS, JavaScript, React.js,
            Express.js, MongoDB, Node.js, Local Storage, Postman API, JWT,
            Multer, CORS
          </li>
        </ul>
        <br />
        {/* Project 2 */}
        <div className="flex flex-col md:flex-row justify-between w-full">
          <h2 className="mb-3 font-semibold text-center text-2xl">
            {" "}
            Python Call Center Logging
          </h2>
          <a
            href="https://github.com/Narasimha57/Narasimha57-pep-pythonSQL-project"
            className="underline font-semibold text-nowrap text-center md:text-end"
          >
            Source Code
          </a>
        </div>
        <ul className="list-disc w-full text-justify px-2 md:px-0">
          <li className="ml-7 font-sans font-normal">
            Architected and implemented a robust backend data management system
            for call center operations streamlining data analysis workflows
          </li>
          <li className="ml-7 font-sans font-normal">
            Developed RESTful APIs to process user metrics and call performance
            data, delivering real-time analytics and custom reporting
            capabilities.
          </li>
          <li className="ml-7 font-sans font-normal">
            Engineered an efficient ETL pipeline to transform CSV data into
            SQLite database, reducing data processing time
          </li>
          <li className="ml-7 font-sans font-normal">
            Implemented automated data export functionality with parameterized
            reporting, enabling actionable insights for stakeholders
          </li>
          <h4 className="ml-7">
            <b>Technologies used: </b>Python, SQL.
          </h4>
        </ul>
        <br />
        {/* Project 3 */}
        <div className="flex flex-col md:flex-row  justify-between w-full">
          <h2 className="mb-3 font-semibold text-center text-2xl">Quiz App</h2>
          <a
            href="https://github.com/Narasimha57/45Days-CODEBEGUN-Internship/tree/main/Day45_Codebegun_FinalProj_Quiz-App"
            className="underline font-semibold text-nowrap text-center md:text-end"
          >
            Source Code
          </a>
        </div>
        <ul className="list-disc w-full text-justify px-2 md:px-0">
          <li className="ml-7 font-sans font-normal">
            Secure login for admins and users.
          </li>
          <li className="ml-7 font-sans font-normal">
            Implemented password-protected access to restrict location sharing
            to authorized users only.
          </li>
          <li className="ml-7 font-sans font-normal">
            Intuitive admin dashboard for managing users and quizzes.
          </li>
          <li className="ml-7 font-sans font-normal">
            Robust user management with CRUD functionalities.
          </li>
          <li className="ml-7 font-sans font-normal">
            Support for multiple-choice and fill-in-the-blank questions, draft
            saving, real-time previews, and publishing.
          </li>
          <li className="ml-7 font-sans font-normal">
            Users can access assigned quizzes with results securely stored
          </li>
          <h4 className="ml-7">
            <b>Technologies used: </b>HTML5, CSS3, JavaScript, React.Js,
            Localstorage.
          </h4>
        </ul>
        <br />
      </div>
    </div>
  );
};

export default Projects;
