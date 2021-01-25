import React from "react";
import { motion } from "framer-motion";
import "./index.scss";
import { projects } from "./database";
import Arrow from "../arrow";

const Projects = () => {

  return (
    <motion.div
      initial={{ opacity: 0, y: -500 }}
      animate={{ opacity: 1, y: "0%" }}
      exit={{ opacity: 0 }}
    >
      <div className="arrowTop">
        <Arrow points="up" to="/" />
        <h3 style={{ color: "white" }}>Home</h3>
      </div>
      <div className="mainContent">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Arrow points="left" mainDiv={{ padding: 15 }} to='education' />
          <h3 style={{ color: "white" }}>Education</h3>
        </div>
        <div className="cardContainer">
          {projects &&
            projects.map((project) => {
              return (
                <div className='cardBackground'>
                  <div className="projectContainer">
                    <div className="descriptionContainer">
                      <p>{project.name}</p>
                      <p>{project.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <h3 style={{ color: "white" }}>Experience</h3>
          <Arrow points="right" mainDiv={{ padding: 15 }} to='experience'/>
        </div>
      </div>
      <div className="arrowBottom">
        <h3 style={{ color: "white" }}>Contact</h3>
        <Arrow points="down" to='contact'/>
      </div>
    </motion.div>
  );
};
export default Projects;
