import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <>
      <div className=" flex">
        <div className=" main">
          <motion.h2
            initial={{ y: -210 }}
            animate={{ y: -10 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="font-color"> Medicine </span>cure diseases but only
            <br />
            doctors can
            <span className="font-color">cure patients</span>
          </motion.h2>

          <Link to="/Hospitals">
            <motion.button
              className="input"
              type="button"
              initial={{ x: -210 }}
              animate={{ x: -10 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Hospitals
            </motion.button>
          </Link>
        </div>
        <div className="col-1 flex">
          <motion.img
            className="img"
            src="docImg.jpg"
            initial={{ x: 210 }}
            animate={{ x: 10 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </div>
      </div>
    </>
  );
};

export default Section1;
