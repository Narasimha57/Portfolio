import React from "react";
import { BsDownload } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";
import CV from "../assets/Narasimha's_Latest_Resume.pdf";
import Photo from "../assets/My new pic.png"; // Replace with your actual photo path

const Hero = () => {
  return (
    <section>
      <div className="text-black flex flex-col md:flex-row justify-center items-center py-20 px-4 md:px-12">
        {/* Left side - Intro */}
        <div className="md:w-1/2 w-full mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-yellow-500 font-bold text-4xl md:text-6xl flex justify-center md:justify-start items-center">
            About Me
          </h1>
          <br />
          <h1 className="text-xl md:text-4xl font-bold py-2">
            Narasimha Gonela
          </h1>
          {/* <h3 className="font-semibold text-xl md:text-3xl mb-4">
            MERN Stack Developer
          </h3> */}
          <p className="text-gray-600 text-justify text-lg font-sans leading-relaxed">
             A <b><i>MERN Stack Developer</i></b> with a Bachelor’s degree in
            Computer Engineering Specializing in Software Engineering from BITS Warangal  and a Diploma in Mining Engineering. My core strengths include
            the MERN Stack, along with strong fundamentals in Python, Java
            and SDLC, Agile.<b><br></br>I am currently working as a Full-Stack Developer at
            RGESIndia</b>, where I contribute to real-time project development and
            the end-to-end architecture of web applications. During my
            bachelor’s degree, I developed a <b>College Bus Live Tracking System,</b>
            which strengthened my expertise in real-time location,and building practical, user-centric 
            applications <b>I aim to grow as an SDE,</b> using my MERN expertise and
            programming skills to build scalable, impactful products. I’m driven
            by continuous learning, problem-solving, and contributing to
            innovative tech solution
          </p>
          <div className="flex flex-col md:flex-row gap-6 mt-5 justify-center md:justify-start">
            {/* <div className="flex items-center gap-3">
              <FaRegHandshake className="text-yellow-500 text-5xl" />
              <h4 className="text-gray-700 font-semibold">Fresher</h4>
            </div> */}
            <a
              className="flex justify-center items-center bg-yellow-300 py-2 rounded-lg text-black font-semibold md:w-42 w-full"
              href="https://www.linkedin.com/in/narasimha-g-0667b4243/"
            >
              Hire Me
            </a>
            <a
              className="flex justify-center items-center bg-yellow-300 py-2 rounded-lg text-black font-semibold md:w-42 w-full"
              href={CV}
              download="Narasimha's_Latest_Resume.pdf"
            >
              Download CV <BsDownload className="ml-2 text-lg" />
            </a>
          </div>
        </div>

        {/* Right side - Photo */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={Photo}
            alt="Narasimha Gonela"
            className="rounded-lg max-w-xs md:max-w-md shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
