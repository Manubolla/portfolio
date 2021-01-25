import React from "react";
import "./index.scss";
import {Link} from 'react-router-dom'

const Arrow = ({points, to, mainDiv}) => {
  return (
    <div style={mainDiv}>
      <Link to={to} href={to} className={`arrow ${points} bounce`}></Link>
    </div>
  );
};
export default Arrow;
