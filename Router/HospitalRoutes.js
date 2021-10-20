const express = require("express");
const HospitalsController = require("../Controller/HospitalsController");
const Router = express.Router();

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + Path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

Router.route("/")
  .get(HospitalsController.getHospitals)
  .post(HospitalsController.createHospitals);

Router.route("/:id").get(HospitalsController.getHospital);

module.exports = Router;
