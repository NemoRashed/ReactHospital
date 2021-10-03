import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Hospitals() {
  const { id } = useParams();
  const [hospital, sethospital] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:9000/Api/Hospital`)
      .then((res) => sethospital(res.data.data));
  }, []);
  return (
    <div className="hospital">
      <div className="hos-head">
        <h1>Somaliland Hospitals</h1>
      </div>
      <div className="flex search">
        <input className="input-hos" type="text" placeholder="city name" />
        <button className="search-btn">search</button>
      </div>
      {hospital.map((value) => (
        <div className="hospital-container">
          <img
            style={{ width: "150px", height: "60px" }}
            src=" data:image/jpeg;base64,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"
          />
          <h2>
            <Link to={`Department/${value._id}`}>{value.title}</Link>
          </h2>
          <h6>{value.address.city}</h6>
        </div>
      ))}
      <div className="flex">
        <div className="ads">
          <img
            className="img-ads"
            src="https://i.pinimg.com/originals/87/3f/dc/873fdcb3abd135fc3f08c219aeddf1ee.png"
          />
        </div>
        <div className="adss">
          <img
            className="img-ads"
            src="https://i.pinimg.com/originals/87/3f/dc/873fdcb3abd135fc3f08c219aeddf1ee.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Hospitals;
