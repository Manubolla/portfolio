import React from "react";
import "./index.scss";
import { motion } from "framer-motion";
import Arrow from "../arrow";
import { data } from "./data.js";
const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 500 }}
      animate={{ opacity: 1, x: "0%" }}
      exit={{ opacity: 0 }}
    >
      <div className='main-education-container'>
      <div className="education-container">
          <ul className="education-table">
            <li className='table-header'>
              <div className='col col-1'>School</div>
              <div className='col col-2'>Degree</div>
              <div className='col col-3'>Year</div>
              <div className='col col-4'>Description</div>
            </li>
            {data &&
              data.map((item) => {
                return (
                  <li className='table-row'>
                    <div className='col col-1'>{item.school}</div>
                    <div className='col col-2'>{item.degree}</div>
                    <div className='col col-3'>{`${item.startYear} - ${item.endYear}`}</div>
                    <div className='col col-4'>{item.description}</div>
                  </li>
                );
              })}
          </ul>
      </div>
        <div className="arrowRight">
          <Arrow points="right" to="/projects" />
          <h3 style={{ color: "white" }}>Projects</h3>
        </div>
      </div>
    </motion.div>
  );
};
export default Education;
