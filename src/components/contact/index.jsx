import React from "react";
import "./index.scss";
import { motion } from "framer-motion";
import Arrow from "../arrow";
import emailjs from 'emailjs-com';

const Contact = (props) => {

    const [state, setState] = React.useState()
    const handleChange = (e) => {
        /* e.preventDefault(); */
        return setState({...state, [e.target.name]: e.target.value})
    }
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_a982egf', 'template_1fz13oh', e.target, 'user_RCaGvNahSzuVmDCQ5kz8F')
        .then((result) => {
            alert('¡Email successfully sent! I will get in touch soon, thank you!')
        }, (error) => {
            alert('Oops, it didnt work, try using the traditional method instead. My mail is: manubolla17@gmail.com')
        });
    }
  return (
    <motion.div
      initial={{ opacity: 0, [props.location.xY]: [props.location.coord] }}
      animate={{ opacity: 1, [props.location.xY]: "0%" }}
      exit={{ opacity: 0 }}
    >
      <div className="arrowTop">
        <Arrow points="up" to="/projects" xY='y' coord={500}/>
        <h3 style={{ color: "white" }}>Projects</h3>
      </div>
      <div>
        <form id="form" class="topBefore" onSubmit={sendEmail}>
          <input id="name" type="text" name='name'placeholder="NAME" onChange={handleChange}/>
          <input id="email" type="text" name='from_name' placeholder="E-MAIL" onChange={handleChange}/>
          <textarea id="message" type="text" name='message' placeholder="MESSAGE" onChange={handleChange}></textarea>
          <input id="submit" type="submit" value="Contact Manu!" />
        </form>
      </div>
    </motion.div>
  );
};
export default Contact;
