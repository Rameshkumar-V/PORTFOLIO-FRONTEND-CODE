import Button from "./Button";
import { useEffect, useRef } from "react";
import "./css/Home.css";

function Home() {
  const homeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = homeRef.current.querySelectorAll(".animated-element");
          elements.forEach((element, index) => {
            element.style.animationName = "animate"; // Add this line
            element.style.animationDelay = `${index * 0.2}s`;
          });
          const elementsRight = homeRef.current.querySelectorAll(".animated-element-right");
          elementsRight.forEach((element, index) => {
            element.style.animationName = "animate"; // Add this line
            element.style.animationDelay = `${index * 0.2}s`;
          });
        } else {
          const elements = homeRef.current.querySelectorAll(".animated-element");
          elements.forEach((element) => {
            element.style.animationName = ""; // Reset animation name
          });
          const elementsRight = homeRef.current.querySelectorAll(".animated-element-right");
          elementsRight.forEach((element) => {
            element.style.animationName = ""; // Reset animation name
          });
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
      }
    );

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    // return () => {
    //   if (homeRef.current) {
    //     observer.unobserve(homeRef.current);
    //   }
    // };
  }, []);

  return (
    <div className="Home" id="Home" ref={homeRef}>
      <div className="Home-Container animated-element-right">
        <div className="img animated-element">
          <img src="/pic.jpg" alt="Profile" />
        </div>
        <div className="Home-Information">
          <h4>
            <i className="p-welcome"> Hi</i>, I am
          </h4>
          <h1 className="p-name animated-element">RAMESHKUMAR V</h1>
          <h3 className="p-job animated-element">Developer</h3>
          <p className="animated-element">
            Welcome to My Portfolio Website! I'm Rameshkumar, a passionate
            developer eager to explore new opportunities. Here you can find my
            projects, skills, and experiences. I am currently seeking job and
            internship opportunities. Feel free to explore and get in touch!
          </p>
        </div>
      </div>
      <Button className="animated-element" />
    </div>
  );
}

export default Home;