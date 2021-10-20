const express = require("express");
const DepartmentController = require("../Controller/DepartmentController");
const Router = express.Router();

Router.route("/")
  .get(DepartmentController.getDepartments)
  .post(DepartmentController.createDepartment);

Router.route("/:id").get(DepartmentController.getDepartment);

module.exports = Router;
