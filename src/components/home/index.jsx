import React from "react";
import Arrow from "../arrow";
import styles from "./index.module.scss";
import { motion } from "framer-motion";
import { useKey } from "../customHooks/indxex";
import {useHistory} from 'react-router-dom'

const Home = (props) => {
  const history = useHistory()
  
  function handleEnter() {
   history.push({pathname:'/projects', xY:'y', coord:-500})
  }
  useKey('ArrowDown', handleEnter);
  return (
    <motion.div
      initial={{ opacity: 0, [props.location.xY]: [props.location.coord]}}
      animate={{ opacity: 1, [props.location.xY]: '0%'}}
      exit={{ opacity: 0 }}
      className={styles.homeContainer}
    >
      <div className={styles.mainContainer}>
        <div className={styles.textContainer}>
          <p className={styles.mainText}>Hi! </p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p className={styles.mainText}>I'm </p>
            <p className={`${styles.mainText} ${styles.textAnimation}`}>
              Manuel
            </p>
          </div>
          <p className={styles.mainText}>Full Stack developer.</p>
        </div>
        <div className={styles.profile}>
          <img
            className={styles.avatar}
            alt="profile"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQFAo1Y4GOALbg/profile-displayphoto-shrink_200_200/0/1610467762713?e=1617235200&v=beta&t=vAGFLeXtZsx896h9u5-zoUAcDsVKtSSJAIrzosv_S4w"
          />
          <h3>Manuel Bolla Agrelo</h3>
          <h5>Full Stack developer</h5>
          <p className={`${styles.description}`}>
          "Challenges are what make life interesting. Overcoming them is what makes life meaningful"
          </p>
          <div className={styles.icons}>
          <a href="https://github.com/Manubolla" rel="noreferrer noopener" target="_blank">
              <i className="ion-social-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/manuel-bolla-agrelo/" rel="noreferrer noopener" target="_blank">
              <i className="ion-social-linkedin"></i>
            </a>
            <a href="mailto:manubolla17@gmail.com">
              <i className={`ion-social-google`}></i>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.arrowContainer}>
      <h3 className={`${styles.animated} ${styles.bounce}`} style={{ color: "white", marginBottom: 30}}>Follow me!</h3>
      <h3 /* className={`${styles.animated} ${styles.bounce}`} */ style={{ color: "white", marginBottom: 30}}>( you can use the keyboard )</h3>
        <Arrow points="down" to="projects" xY='y' coord={-500}/>
      </div>
    </motion.div>
  );
};
export default Home;
