const hospitals = require("../Models/HospitalsModel");

exports.createHospitals = async (req, res) => {
  try {
    //req.body.image = req.file.filename;
    await hospitals.create(req.body);

    res.status(200).json({
      message: " created",
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.getHospitals = async (req, res) => {
  try {
    const hos = await hospitals.find({});

    res.status(200).json({
      message: " found",
      data: hos,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.getHospital = async (req, res) => {
  try {
    const hos = await hospitals.findById(req.params.id);

    res.status(200).json({
      message: " found",
      data: hos,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};
