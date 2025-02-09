import React from 'react';
import { Code, Database, Monitor, Terminal, Wrench, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-End",
      icon: <Monitor className="w-6 h-6" />,
      skills: ["HTML5", "CSS3", "JavaScript", "ReactJS", "TailwindCSS"],
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      title: "Back-End",
      icon: <Terminal className="w-6 h-6" />,
      skills: ["Node.js", "Express.js"],
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "PL/SQL", "MongoDB", "PostgreSQL"],
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600"
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "Java", "C", "DSA"],
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      title: "Developer Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["VSCode", "GitHub"],
      bgColor: "bg-red-100",
      iconColor: "text-red-600"
    },
    {
      title: "Software Development Principles",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["SDLC", "Agile"],
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-600"
    }
  ];

  return (
    <div id='Skills' className="max-w-6xl mx-auto p-6">
      <div id="Projects" className="flex justify-center items-center mt-5">
        <h1 className="text-yellow-500 font-bold text-4xl md:text-6xl">Technical Skills</h1>
      </div><br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className={`${category.bgColor} rounded-lg p-6 shadow-lg transition-transform hover:scale-105`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`${category.iconColor}`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 bg-white rounded-full text-sm font-medium shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;