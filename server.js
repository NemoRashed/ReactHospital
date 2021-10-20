const mongoose = require("mongoose");
const DB = process.env.DB.replace("<PASSWORD>", process.env.DB_PASSWORD);

mongoose.connect(DB).then(() => console.log("connected"));
