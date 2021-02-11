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
  }, [location]);
  return (
    <div>
      <ul>
        <li>
          <Link className={state.home ? "active" : ""} to={{pathname: "/",  xY:'y', coord: -500}}> 
            {" "}
            Home
          </Link>
        </li>

        <li>
          <Link className={state.projects ? "active" : ""}  to={{pathname: "/projects",  xY:'y', coord: -500}}>
            Projects
          </Link>
        </li>

        <li>
          <Link className={state.education ? "active" : ""}  to={{pathname: "/education",  xY:'y', coord: -500}}>
            Education
          </Link>
        </li>

        <li>
          <Link className={state.experience ? "active" : ""}  to={{pathname: "/experience",  xY:'y', coord: -500}}>
            Work experience
          </Link>
        </li>

        <li>
          <Link className={state.contact ? "active" : ""} to={{pathname: "/contact",  xY:'y', coord: -500}}>
            Contact me
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
