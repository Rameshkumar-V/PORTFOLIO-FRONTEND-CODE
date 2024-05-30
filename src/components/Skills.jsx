import React, { useEffect, useState, useRef } from "react";
import axios from 'axios'; 
import "./css/Skills.css";

function Skills() {
  const [skill, setSkill] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://portfolio-backend-4-ahwz.onrender.com/data');
        console.log('fetched data:', response.data);
        setSkill(response.data[0]); // Since the response is an array, get the first element
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    // return () => {
    //   if (skillsRef.current) {
    //     observer.unobserve(skillsRef.current);
    //   }
    // };
  }, []);

  return (
    <div className="Skills" id="Myskills" ref={skillsRef}>
      
      <h1 style={{ color: "white"}}>Skills</h1>
      <div className="Skills-cen">
        <div className="Skills-con">
          {Object.keys(skill).map((category) => {
            // Skip _id and name properties
            if (category === "_id" || category === "name") return null;
            return (
              skill[category].length > 0 &&
              <div className="Skills-field" key={category}>
                <h3 className="Category">{category}</h3>
                <ul>
                  {skill[category].map((item, i) => (
                    <li className={`Skills ${isVisible ? "animate" : ""}`} key={i} style={{ color: "white"}}>
                      {item.name}
                      {item.link && item.link !== "SERVICE" ? (
                        <img width="30" height="30" src={item.link} alt="img" />
                      ) : (
                        "" 
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
