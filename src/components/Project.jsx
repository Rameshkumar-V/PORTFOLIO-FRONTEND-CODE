import React, { useState } from 'react';
import './css/Project.css'; // Import your CSS file for styling

const projects = [
  { id: 1, name: 'ELECTION MANAGEMENT SYSTEM', description: 'Description of Project 1',github:"",img:"pic.jpg" },
  { id: 2, name: 'RESULT SCRABBING', description: 'Description of Project 2',github:"",img:"pic.jpg"  },
  { id: 3, name: 'Project 3', description: 'Description of Project 3',github:"",img:"pic.jpg"  },
  // Add more projects as needed
];

const ProjectSlider = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  return (
    <div className="Project" id="Project">
        <h1>Projects</h1>
    <div className="Project-Slider">

      <div className="project">
        <img src={projects[currentProjectIndex].img} alt="" />
        <h2 className='name'>{projects[currentProjectIndex].name}</h2>
        <p className='desc'>{projects[currentProjectIndex].description}</p>
        <div className="btns">
            <button className='pre' onClick={prevProject}>Previous</button>
            <button className='github'><a href={projects[currentProjectIndex].github}>Github Link</a></button>
            <button className='next' onClick={nextProject}>Next</button>
        </div>
      </div>


    </div>
    </div>
  );
};

export default ProjectSlider;
