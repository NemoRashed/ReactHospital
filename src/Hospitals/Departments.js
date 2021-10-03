import React from "react";
import Doctors from "./Doctors";
import { Link } from "react-router-dom";
import Appiontment from "./Appiontment";
import { useState, useEffect } from "react";
// import axios from "axios";
import { useParams } from "react-router-dom";
import DepartmentCards from "./DepartmentCards";

function Departments() {
  const { id } = useParams();
  const [info, setinfo] = useState(false);

  // const [department, setdepartment] = useState([]);
  // useEffect(() => {
  //   axios.get(`http://localhost:9000/Api/Department`).then((res) => {
  //     setdepartment(res.data);
  //   });
  // });
  return (
    <>
      <div>
        <img
          src="https://th.bing.com/th/id/R.cbfb18c509cad24d89d664b2d6f44ba8?rik=oMcrX5zThM75hA&pid=ImgRaw&r=0"
          className="hos-img"
        />
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
      </div>
      {info && form()}
      <DepartmentCards />

      {/* { hospital.map((hospital)=>
    //name
      hospital.department.map((department)=> 
      //departments
         <h1>{department.name}</h1>
      )

   
      )}  */}
    </>
  );
  function form() {
    return <Appiontment />;
  }
}

export default Departments;
