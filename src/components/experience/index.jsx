import React from "react";
import Arrow from "../arrow";
import "./index.scss";
import { motion } from "framer-motion";
import { data } from "./data.js";
import { useKey } from "../customHooks/indxex";
import {useHistory} from 'react-router-dom'


const Experience = (props) => {

  const history = useHistory();
  useKey('ArrowLeft', () => history.push({pathname: '/projects', xY: 'x', coord: 500}))
  return (
    <motion.div
      initial={{ opacity: 0, [props.location.xY]: [props.location.coord] }}
      animate={{ opacity: 1, [props.location.xY]: "0%" }}
      exit={{ opacity: 0 }}
    >
      <div className="main-experience-container">
        <div className="arrowLeft">
          <Arrow points="left" to="/projects" xY='x' coord={500} />
          <h3 style={{ color: "white" }}>Projects</h3>
        </div>
        <div className="experience-container">
          <ul className="experience-table">
            <li className="table-header">
              <div className="col col-1">Title</div>
              <div className="col col-2">Company</div>
              <div className="col col-3">Year</div>
              <div className="col col-4">Description</div>
            </li>
            {data &&
              data.map((item) => {
                return (
                  <li className={`table-row row-${item.id}`}>
                    <div className="col col-1">{item.title}</div>
                    <div className="col col-2">{`${item.company} ${item.type}`}</div>
                    <div className="col col-3">{`${item.year}`}</div>
                    <div className="col col-4">{item.description}</div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
export default Experience;
