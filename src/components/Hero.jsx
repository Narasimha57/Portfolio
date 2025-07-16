import React from 'react';
import { BsDownload } from "react-icons/bs";
import {FaRegHandshake, FaRegFolderOpen} from "react-icons/fa"
import CV from "../assets/Narasimha's_Latest_Resume.pdf";

const Hero = () => {
  return (
    <section >
      <div className='text-black flex md:flex-row justify-center items-center py-20'>
        <div className='md:w-full mb-2 text-center md:text-left  px-4 md:px-12 sm:mt-5'>
        {/* <h1 className='text-yellow-500 font-bold justify-center flex items-center text-4xl md:text-6xl'>About Me</h1><br />
            <h1 className='text-xl md:text-4xl my-0 font-bold py-2'>Narasimha Gonela</h1>
            <h3 className='text-wrap md:text- my-0 font-semibold items-center text-xl md:text-3xl '>Web Developer</h3>
            <br /> */}
            <p className='text-gray-600 font-semibold md:font-semibold mb-6 whitespace-normal truncate text-justify font-sans text-lg mt-0'>I recently completed my Bachelor’s degree in Computer Engineering, specializing in Software Engineering, from Balaji Institute of Technology and Science, Warangal, with an aggregate CGPA of 7.52. Prior to that, I earned a Diploma in Mining Engineering from Daripally Anantha Ramulu College of Engineering and Technology Khammam, after completing my secondary education at ZPP Secondary School. During my academic journey, I developed a strong passion for software development, which culminated in my final-year project titled "College Bus Live Tracking System." This project enhanced my skills in real-time tracking, API integrations, and user interface logic, laying a solid foundation for full-stack development. I have a strong command of Python and Java, along with a understanding of Data Structures and Algorithms (DSA) and the Software Development Life Cycle (SDLC). I specialize in MERN Stack Developer with hands-on experience in MongoDB, Express.js, React.js, and Node.js, enabling me to build scalable, responsive, and dynamic full-stack web applications. In addition to coding, I spend time gaming, which helps sharpen my strategic thinking and problem-solving skills. I am now eager to apply my knowledge and passion to real-world software projects and contribute meaningfully to innovative developments in the tech industry.
          </p>
            <div className='w-full flex flex-col md:flex-row md:w-full gap-6 mt-5'>
            <div className='flex items-center justify-center gap-3 mb-1'>
              <FaRegHandshake className="text-yellow-500 text-5xl mr-4"/>
              <h4 className='text-gray-700 font-semibold'>Fresher</h4>
            </div>
                <button className='md:w-1/2 w-full bg-yellow-500/70 text-black px-6 py-2 rounded-lg hover:bg-yellow-400 duration-200 font-semibold'>Hire Me</button>
                <a className="md:w-1/2 flex justify-center items-center bg-yellow-500/40 py-2 rounded-lg text-black-700 font-semibold" href={CV} download="Narasimha's_Latest_Resume.pdf">
                    Download CV <BsDownload className='ml-2 text-lg' />
                </a>
            </div>
        </div>       
    </div>

    </section>
    
  );
}

export default Hero;
