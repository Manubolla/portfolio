import React from "react";
import "./index.scss";
import {Link} from 'react-router-dom'

const Arrow = ({points, to, mainDiv, xY, coord}) => {
  return (
    <div style={mainDiv}>
      <Link to={{pathname: to, xY, coord}} href={to} className={`arrow ${points} bounce`}></Link>
    </div>
  );
};
export default Arrow;
