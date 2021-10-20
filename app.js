const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config({ path: "./config.env" });
require("./server");

const app = express();
app.use(express.static("images"));
app.use(bodyParser());
app.use(cors());

const HospitalRouter = require("./Router/HospitalRoutes");
const DepartmentRouter = require("./Router/DepartmentRoutes");

app.use("/Api/Hospital", HospitalRouter);
app.use("/Api/Department", DepartmentRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
