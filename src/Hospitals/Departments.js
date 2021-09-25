import React from "react";
import Doctors from "./Doctors";
import { Link } from "react-router-dom";
import Appiontment from "./Appiontment";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Departments() {
  const { id } = useParams();
  const [info, setinfo] = useState(false);
  const [hospital, sethospital] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:9000/Api/Hospital`)
      .then((res) => sethospital(res.data.data));
  }, []);
  return (
    <>
      {hospital.department.map((value) => (
        <div>
          <div>
            <img src="doc1.jpg" className="hos-img" />
            {info ? (
              <button
                style={{
                  backgroundColor: "red",
                  width: " 100px",
                  height: "29px",
                  marginLeft: "30px",
                  borderRadius: "7px",
                  color: "white",
                }}
                onClick={() => setinfo(false)}
              >
                Close
              </button>
            ) : (
              <button
                style={{
                  backgroundColor: "blue",
                  width: " 150px",
                  height: "35px",
                  marginLeft: "30px",
                  borderRadius: "7px",
                  color: "white",
                  marginTop: "20px",
                  fontSize: "20px",
                }}
                onClick={() => setinfo(true)}
              >
                Appiontment
              </button>
            )}
            {info && form()}
            <h1 className="hos-head">{value.name}</h1>
            <div className="flex boxes">
              <div className="doc-box">
                <img
                  className="doc-img"
                  src="https://th.bing.com/th/id/OIP.88F_JB9JLXZ__x2T4AXyZAHaIj?w=182&h=210&c=7&r=0&o=5&pid=1.7"
                />
                <h2>Doctor Name</h2>
                <button className="doc-btn">
                  <Link to="Doctors">more info </Link>
                </button>
              </div>

              <div className="doc-box">
                <img
                  className="doc-img"
                  src="https://th.bing.com/th/id/OIP.wqzEjJAoRhRukeyTR3sXwQHaLI?w=182&h=274&c=7&r=0&o=5&pid=1.7"
                />
                <h2>Doctor Name</h2>

                <button className="doc-btn">
                  <Link to="Doctors">more info </Link>
                </button>
              </div>
              <div className="doc-box">
                <img
                  className="doc-img"
                  src="https://th.bing.com/th/id/OIP.88F_JB9JLXZ__x2T4AXyZAHaIj?w=182&h=210&c=7&r=0&o=5&pid=1.7"
                />
                <h2>Doctor Name</h2>
                <button className="doc-btn">
                  <Link to="Doctors">more info </Link>
                </button>
              </div>
              <div className="doc-box">
                {" "}
                <img
                  className="doc-img"
                  src="https://th.bing.com/th/id/OIP.wqzEjJAoRhRukeyTR3sXwQHaLI?w=182&h=274&c=7&r=0&o=5&pid=1.7"
                />
                <h2>Doctor Name</h2>
                <button className="doc-btn">
                  <Link to="Doctors">more info </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
  function form() {
    return <Appiontment />;
  }
}

export default Departments;
