import React, {Component, useState} from "react";
import '../styles/App.css';

const projects = [
  { name: "AI Chatbot", description: "A chatbot powered by machine learning to assist users." },
  { name: "E-Commerce Platform", description: "A full-stack e-commerce website with payment integration." },
  { name: "Portfolio Website", description: "A personal portfolio showcasing projects and skills." },
];

const App = () => {

  return (
    <div className="ns-wrapper">
      {
         projects.map((item , index) => (
          <div key={index}>
            <h1 data-ns-test="project-name"> {item.name} </h1>
            <h6 data-ns-test="project-description"> {item.description} </h6>
          </div>
         ))
      }
    </div>
  )
}


export default App;
