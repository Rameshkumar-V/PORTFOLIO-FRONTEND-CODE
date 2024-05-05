import { useEffect, useState } from "react";
import "./css/Skills.css"
function Skills(){
    const [skill,setskill]=useState({});

    useEffect(()=>{
        const myskill={
            'TECHNICAL':[
              {name:'python',link:"https://img.icons8.com/color/48/python--v1.png"},
              {name:'javascript',link:"https://img.icons8.com/color/100/javascript--v1.png"},
              {name:'NodeJs',link:"https://img.icons8.com/color/48/nodejs.png"}
            ],
            'FRAMEWORKS':[
              {name:'ReactJs',link:"https://img.icons8.com/officel/16/react.png"},
              {name:'ExpressJs',link:"https://img.icons8.com/color/48/express-js.png"},
              {name:'Flask',link:"https://img.icons8.com/color/48/flask.png"}
            ],
            'DATABASE':[
              {name: 'Mysql',link:"https://img.icons8.com/color/48/mysql-logo.png"},
              {name:'Óracle',link:"https://img.icons8.com/color/48/oracle-logo.png"},
              {name:'MongoDB',link:"https://img.icons8.com/color/48/mongodb.png"}],
            'OTHERS':[
              {
                name:'Git and Github',link: "https://img.icons8.com/glyph-neue/64/github.png"},
                {name:'Vs Code',link:"https://img.icons8.com/color/48/visual-studio-code-2019.png" },
                {name:'Pycharm',link:null}],
           'SERVICE':[
            {name: 'Python Developer'},
            {name:'Full Stack Developer'},
            {name:'MERN Developer'},
            {name:'Data Analyst'},
            {name: 'Backend Developer'},
            {name:'Selenium Tester (python)'}] 
        }
        setskill(myskill);
},[]);
    return (
        <div className="Skills" id="Myskills">
      <h1>Skills</h1>
      <div className="Skills-cen">

        <div className="Skills-con">

          {Object.keys(skill).map((category) => (
            <div className="Skills-field" key={category} >
              <h3 className="Category">{category}</h3>
              <ul>
                {skill[category].map((item,i) => (
                  <li className="Skills" key={i}>{item.name}{item.link && category !='SERVICE' ? <img width="30" height="30" src={item.link} alt="img"/>:''}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>

    )
};

    

export default Skills;