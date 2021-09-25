import React from "react";
import { motion } from "framer-motion";

import {
  FaUser,
  FaRegSmileBeam,
  FaProcedures,
  FaBuilding,
} from "react-icons/fa";

function Section4() {
  return (
    <div>
      {/* <!-- counter section starts  --> */}

      <div class="counter">
        <div class="container">
          <div class="box-container">
            <div class="box" data-aos="fade-up">
              <FaBuilding
                style={{ color: "blue", width: "60px", height: "30px" }}
              />
              <span>120+</span>
              <h3>Hospitals</h3>
            </div>

            <div class="box" data-aos="fade-up">
              <FaUser
                style={{ color: "blue", width: "60px", height: "30px" }}
              />
              <span>100+</span>
              <h3>Doctors</h3>
            </div>

            <div class="box" data-aos="fade-up">
              <FaRegSmileBeam
                style={{ color: "blue", width: "50px", height: "30px" }}
              />
              <span>1200+</span>
              <h3>happy patients</h3>
            </div>

            <div class="box" data-aos="fade-up">
              <FaProcedures
                style={{ color: "blue", width: "50px", height: "30px" }}
              />
              <span>130+</span>
              <h3>Departments</h3>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- counter section ends --> */}
    </div>
  );
}

export default Section4;
