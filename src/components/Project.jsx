import React, { useState, useEffect } from 'react';
import './css/Project.css'; // Import your CSS file for styling
import axios from 'axios';

const ProjectSlider = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://portfolio-backend-4-ahwz.onrender.com/myproject');
        console.log('fetched data:', response.data);
        setProjects(response.data.project);
        console.log(response.data); // Since the response is an array, get the first element
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    }

    fetchData();
  }, []);

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  return (
    <div className="Project" id="Project">
      <h1 style={{ color: "white"}}>Projects</h1>
      <div className="Project-Slider">
        {projects.length > 0 && (
          <div className="project">
            <img src={projects[currentProjectIndex].img} alt="banner" />
            <h2 className='name'>{projects[currentProjectIndex].name}</h2>
            <p className='desc'>{projects[currentProjectIndex].desc}</p>
            <div className="btns">
              <button className='pre' onClick={prevProject}>Previous</button>
              <button className='github'><a href={projects[currentProjectIndex].github}>Github  or View Link</a></button>
              <button className='next' onClick={nextProject}>Next</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectSlider;
