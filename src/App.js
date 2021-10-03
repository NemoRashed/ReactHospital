import "./App.css";
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
import Appiontment from "./Hospitals/Appiontment";
import DepartmentCards from "./Hospitals/DepartmentCards";
import Section5 from "./home/Section5";
import Section6 from "./home/Section6";
import Blogs from "./Blogs/Blogs";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Section1 />
            <Section4 />
            <Section5 />
            <Section2 />

            <Section6 />
          </Route>

          <Route path="/Hospitals" component={Hospitals}>
            <Hospitals />
          </Route>

          <Route path="/Department/:id" component={Hospitals}>
            <Departments />
          </Route>
          <Route path="/Doctors">
            <Doctors />
          </Route>
          <Route path="/Bolgs">
            <Doctors />
          </Route>

          <Route path="/Appiontment">
            <Appiontment />
          </Route>
          <Route path="/DepartmentCards">
            <DepartmentCards />
          </Route>
          <Route path="/Contact">
            <Section6 />
          </Route>
          <Route path="/Blogs">
            <Blogs />
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
