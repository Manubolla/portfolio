import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();

  const [state, setState] = useState({
    home: "",
    projects: "",
    education: "",
    experience: "",
    contact: "",
  });
  const generatePath = () => {
    const path = location.pathname.substring(1, location.pathname.length);
    if (path === "") {
      return { path: "home" };
    } else {
      return { path };
    }
  };
  useEffect(() => {
    const { path } = generatePath();
    setState((s) => {
        return { 
            [path]: 'active'
        }
    });
    /*   ...state,
        [path]: 'active'

    }) */
  }, [location]);
  return (
    <div>
      <ul>
        <li>
          <Link className={state.home ? "active" : ""} to="/">
            {" "}
            Home
          </Link>
        </li>

        <li>
          <Link className={state.projects ? "active" : ""} to="/projects">
            Projects
          </Link>
        </li>

        <li>
          <Link className={state.education ? "active" : ""} to="/education">
            Education
          </Link>
        </li>

        <li>
          <Link className={state.experience ? "active" : ""} to="/experience">
            Work experience
          </Link>
        </li>

        <li>
          <Link className={state.contact ? "active" : ""} to="/contact">
            Contact me
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
