import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./components/home/index.jsx";
import { AnimatePresence } from "framer-motion";
import Projects from "./components/projects/";
import './index.scss'
import Navbar from "./components/navbar/";
import Education from "./components/education/";
import Experience from "./components/experience/";
import Contact from "./components/contact/";

function App() {
  const location = useLocation();
  return (
    <div className="App">
       <Navbar/>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/education" component={Education}/>
          <Route exact path="/experience" component={Experience}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
