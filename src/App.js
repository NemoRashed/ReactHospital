import "./App.css";
import { motion } from "framer-motion";
import Footer from "./home/Footer";
import Header from "./home/header";
import Section1 from "./home/section1";
import Section2 from "./home/Section2";
import Section4 from "./home/Section4";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginBody from "./Login/LoginBody";
import Register from "./Login/Register";

import Hospitals from "./Hospitals/Hospitals";
import Departments from "./Hospitals/Departments";
import Doctors from "./Hospitals/Doctors";
// import { useEffect, useState } from "react";
// import axios from "axios";
import Appiontment from "./Hospitals/Appiontment";

function App() {
  // const [hospital, sethospital] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:9000/Api/Hospital")
  //     .then((res) => console.log(res));
  // });
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Section1 />
            <Section4 />
            <Section2 />
          </Route>

          <Route path="/Hospitals" component={Hospitals}>
            <Hospitals />
          </Route>

          <Route path="/Department" component={Hospitals}>
            <Departments />
          </Route>
          <Route path="/Doctors">
            <Doctors />
          </Route>
          <Route path="/Bolgs">
            <Doctors />
          </Route>

          <Route path="/">
            <Appiontment />
          </Route>

          <Route path="/Login">
            <LoginBody />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
