import React from 'react';
import { BsDownload } from "react-icons/bs";
import {FaRegHandshake, FaRegFolderOpen} from "react-icons/fa"
import CV from "../assets/My_latest_Resume.pdf";

const Hero = () => {
  return (
    <section className=' bg-gradient-to-t from-white to-yellow-50'>
      <div className='text-black flex md:flex-row justify-center items-center py-20'>
        <div className='md:w-full mb-10 text-center md:text-left  px-4 md:px-12'>
        {/* <h1 className='text-yellow-500 font-bold justify-center flex items-center text-4xl md:text-6xl'>About Me</h1><br />
            <h1 className='text-xl md:text-4xl my-0 font-bold py-2'>Narasimha Gonela</h1>
            <h3 className='text-wrap md:text- my-0 font-semibold items-center text-xl md:text-3xl '>Web Developer</h3>
            <br /> */}
            <p className='text-gray-600 font-semibold md:font-semibold mb-6 whitespace-normal truncate text-justify font-sans text-lg mt-24'>I recently completed my Bachelor's degree in Computer Engineering, specializing in Software Engineering, from Balaji Institute of Technology and Science in Warangal, achieving an aggregate percentage of 7.52. Before this, I earned a Diploma in Mining Engineering from Daripally Anantha Ramulu College of Engineering and Technology in Khammam, following my secondary education at ZPP Secondary School. Throughout my studies, I developed a strong interest in software development, culminating in my project titled "College Bus Live Tracking System," which enhanced my skills in real-time tracking and user interface design. I have a solid foundation in programming languages like Python and Java, along with a good understanding of Data Structures and Algorithms (DSA) and the Software Development Life Cycle (SDLC). Additionally, I am familiar with web technologies such as HTML, CSS, and JavaScript, enabling me to contribute effectively to both front-end and back-end tasks. In my free time, I enjoy gaming, which helps me develop strategic thinking and problem-solving skills. I am eager to leverage my skills and knowledge in a professional setting and look forward to contributing to innovative projects in the technology field.
          </p>
            <div className='w-full flex flex-col md:flex-row md:w-full gap-6 mt-5'>
            <div className='flex items-center justify-center gap-3 mb-1'>
              <FaRegHandshake className="text-yellow-500 text-5xl mr-4"/>
              <h4 className='text-gray-700 font-semibold'>Fresher</h4>
            </div>
                <button className='md:w-1/2 w-full bg-yellow-500/70 text-black px-6 py-2 rounded-lg hover:bg-yellow-400 duration-200 font-semibold'>Hire Me</button>
                <a className="md:w-1/2 flex justify-center items-center bg-yellow-500/40 py-2 rounded-lg text-black-700 font-semibold" href={CV} download="My_latest_Resume.pdf">
                    Download CV <BsDownload className='ml-2 text-lg' />
                </a>
            </div>
        </div>       
    </div>

    </section>
    
  );
}

export default Hero;
