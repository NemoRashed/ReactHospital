const department = require("../Models/departmentModel");

exports.createDepartment = async (req, res) => {
  try {
    //req.body.image = req.file.filename;
    await department.create(req.body);

    res.status(200).json({
      message: " created",
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.getDepartments = async (req, res) => {
  try {
    const dep = await department.find({});

    res.status(200).json({
      message: " found",
      data: dep,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.getDepartment = async (req, res) => {
  try {
    // const dep = await department.find(req.params.id);
    const dep = await department
      .find({ hospital: req.params.id })
      .populate("hospital");

    res.status(200).json({
      message: " found",
      data: dep,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};
