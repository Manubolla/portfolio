import React from "react";
import "./index.scss";
import { motion } from "framer-motion";
import Arrow from "../arrow";

const Contact = () => {

    const [state, setState] = React.useState()
    const handleChange = (e) => {
        /* e.preventDefault(); */
        return setState({...state, [e.target.id]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state)
    }
  return (
    <motion.div
      initial={{ opacity: 0, y: -500 }}
      animate={{ opacity: 1, y: "0%" }}
      exit={{ opacity: 0 }}
    >
      <div className="arrowTop">
        <Arrow points="up" to="/projects" />
        <h3 style={{ color: "white" }}>Projects</h3>
      </div>
      <div>
        <form id="form" class="topBefore" onSubmit={handleSubmit}>
          <input id="name" type="text" placeholder="NAME" onChange={handleChange}/>
          <input id="email" type="text" placeholder="E-MAIL" onChange={handleChange}/>
          <textarea id="message" type="text" placeholder="MESSAGE" onChange={handleChange}></textarea>
          <input id="submit" type="submit" value="GO!" />
        </form>
      </div>
    </motion.div>
  );
};
export default Contact;
