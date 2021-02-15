import React from "react";
import { motion } from "framer-motion";
import "./index.scss";
import { projects } from "./database";
import Arrow from "../arrow";
import { useHistory } from "react-router-dom";
import { useKey } from "../customHooks/indxex";
import Folder from "../folder";
import CustomModal from "../modal";

const Projects = (props) => {
  const history = useHistory();
  useKey("ArrowUp", () => history.push({ pathname: "/", xY: "y", coord: 500 }));
  useKey("ArrowLeft", () =>
    history.push({ pathname: "/education", xY: "x", coord: -500 })
  );
  useKey("ArrowRight", () =>
    history.push({ pathname: "/experience", xY: "x", coord: 500 })
  );
  useKey("ArrowDown", () =>
    history.push({ pathname: "/contact", xY: "y", coord: -500 })
  );
  

  return (
    <motion.div
      initial={{ opacity: 0, [props.location.xY]: [props.location.coord] }}
      animate={{ opacity: 1, [props.location.xY]: "0%" }}
      exit={{ opacity: 0 }}
    >
      <div className="arrowTop">
        <Arrow points="up" to="/" from="projects" xY="y" coord={500} />
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
          <Arrow
            points="left"
            mainDiv={{ padding: 15 }}
            to="education"
            xY="x"
            coord={500}
          />
          <h3 style={{ color: "white" }}>Education</h3>
        </div>
        <div className="content">
          <div className="content-body">
            {projects &&
              projects.map((project) => (
                <CustomModal project={project}/>
              ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <h3 style={{ color: "white" }}>Experience</h3>
          <Arrow
            points="right"
            mainDiv={{ padding: 15 }}
            to="experience"
            xY="x"
            coord={-500}
          />
        </div>
      </div>
      <div className="arrowBottom">
        <h3 style={{ color: "white" }}>Contact</h3>
        <Arrow points="down" to="contact" xY="y" coord={-500} />
      </div>
    </motion.div>
  );
};
export default Projects;
