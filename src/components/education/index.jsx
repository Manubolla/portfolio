import React from "react";
import "./index.scss";
import { motion } from "framer-motion";
import Arrow from "../arrow";
import { data } from "./data.js";
import { useKey } from "../customHooks/indxex";
import { useHistory } from "react-router-dom";
const Education = (props) => {

  const history = useHistory();
  useKey('ArrowRight', () => history.push({pathname: '/projects', xY: 'x', coord: -500}))
  return (
    <motion.div
      initial={{ opacity: 0, [props.location.xY]: [props.location.coord]}}
      animate={{ opacity: 1, [props.location.xY]: "0%" }}
      exit={{ opacity: 0 }}
    >
      <div className='main-education-container'>
      <div className="education-container">
          <ul className="education-table">
            <li className='table-header'>
              <div className='columna columna-1'>School</div>
              <div className='columna columna-2'>Degree</div>
              <div className='columna columna-3'>Year</div>
              <div className='columna columna-4'>Description</div>
            </li>
            {data &&
              data.map((item) => {
                return (
                  <li className='table-row'>
                    <div className='columna columna-1'>{item.school}</div>
                    <div className='columna columna-2'>{item.degree}</div>
                    <div className='columna columna-3'>{`${item.startYear} - ${item.endYear}`}</div>
                    <div className='columna columna-4'>{item.description}</div>
                  </li>
                );
              })}
          </ul>
      </div>
        <div className="arrowRight">
          <Arrow points="right" to="/projects" xY='x' coord={-500}/>
          <h3 style={{ color: "white" }}>Projects</h3>
        </div>
      </div>
    </motion.div>
  );
};
export default Education;
