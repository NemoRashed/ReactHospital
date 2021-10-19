import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { MdStar } from "react-icons/md";

function DepartmentCards() {
  const { id } = useParams();
  const [department, setdepartment] = useState([]);
  const [selected, setSelected] = useState();
  const [info, setinfo] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/Api/Department/${id}`)
      .then((res) => setdepartment(res.data.data));
  });
  return (
    <>
      {info === true && doc_info()}
      {department.map((department) => (
        <div>
          <h1 className="hos-head">{department.name}</h1>
          <div className="flex boxes">
            {department.doctor.map((doctor) => (
              <div className="doc-box">
                <img
                  className="doc-img"
                  src="https://th.bing.com/th/id/OIP.88F_JB9JLXZ__x2T4AXyZAHaIj?w=182&h=210&c=7&r=0&o=5&pid=1.7"
                />
                <h2>{doctor.docName}</h2>
                <button className="doc-btn">
                  <Link
                    to={`Doctors/${department._id}`}
                    onClick={() => {
                      setinfo(true);
                      setSelected(doctor);
                      console.log(doctor);
                    }}
                  >
                    more info{" "}
                  </Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
  function doc_info() {
    return (
      <div className="card-info">
        <div className=" flex">
          <div>
            <img
              className="doc-info-img"
              src="https://th.bing.com/th/id/OIP.88F_JB9JLXZ__x2T4AXyZAHaIj?w=182&h=210&c=7&r=0&o=5&pid=1.7"
            />
          </div>
          <div className="doc-info">
            <h1>{selected.docName}</h1>

            <h3>Expirence-{selected.expirence}</h3>
            <h3>Language-{selected.language}</h3>
            <h3>Email-{selected.email}</h3>
            <h3>Hours-{selected.hours}</h3>
          </div>
        </div>
        <div className="flex">
          <div className="doc-info-patient">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <h4>30 patient rating</h4>
            <h4>50 patient comment</h4>
          </div>
          <div className="social-media-icons doc-social">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-twitter"></i>
          </div>
        </div>
        <button
          style={{
            color: "white",
            backgroundColor: "red",
            marginLeft: "200px",
            padding: "6px",
          }}
          onClick={() => setinfo(false)}
        >
          close
        </button>
      </div>
    );
  }
}

export default DepartmentCards;
