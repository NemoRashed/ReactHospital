import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function DepartmentCards() {
  const { id } = useParams();
  const [department, setdepartment] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/Api/Department/${id}`)
      .then((res) => setdepartment(res.data.data));
  });
  return (
    <>
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
                  <Link to={`Doctors/${department._id}`}>more info </Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default DepartmentCards;
