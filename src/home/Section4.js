import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

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
              <CountUp
                start={0}
                end={120}
                duration={2.75}
                separator=" "
                decimals={0}
                decimal=","
                prefix=" "
                suffix=" +"
                onEnd={() => console.log("Ended! 👏")}
                onStart={() => console.log("Started! 💨")}
              >
                <span>120+</span>
              </CountUp>
              <h3>Hospitals</h3>
            </div>

            <div class="box" data-aos="fade-up">
              <FaUser
                style={{ color: "blue", width: "60px", height: "30px" }}
              />
              <CountUp
                start={0}
                end={500}
                duration={2.75}
                separator=" "
                decimals={0}
                decimal=","
                prefix=" "
                suffix=" +"
                onEnd={() => console.log("Ended! 👏")}
                onStart={() => console.log("Started! 💨")}
              >
                <span>500+</span>
              </CountUp>
              <h3>Doctors</h3>
            </div>

            <div class="box" data-aos="fade-up">
              <FaRegSmileBeam
                style={{ color: "blue", width: "50px", height: "30px" }}
              />{" "}
              <CountUp
                start={0}
                end={1200}
                duration={2.75}
                separator=" "
                decimals={0}
                decimal=","
                prefix=" "
                suffix=" +"
                onEnd={() => console.log("Ended! 👏")}
                onStart={() => console.log("Started! 💨")}
              >
                <span>1200+</span>
              </CountUp>
              <h3>happy patients</h3>
            </div>

            <div class="box" data-aos="fade-up">
              <FaProcedures
                style={{ color: "blue", width: "50px", height: "30px" }}
              />{" "}
              <CountUp
                start={0}
                end={130}
                duration={2.75}
                separator=" "
                decimals={0}
                decimal=","
                prefix=" "
                suffix=" +"
                onEnd={() => console.log("Ended! 👏")}
                onStart={() => console.log("Started! 💨")}
              >
                <span>130+</span>
              </CountUp>
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
