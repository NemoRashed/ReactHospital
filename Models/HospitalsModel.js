const mongoose = require("mongoose");
const hosShema = mongoose.Schema({
  title: String,
  logo: String,
  image: String,
  date: Date,
  address: {
    city: String,
    region: String,
  },
  location: {
    long: Number,
    lat: Number,
  },

  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  // department: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "department",
  // },
});

const hospitals = mongoose.model("hospital", hosShema);
module.exports = hospitals;

//react-toastify  cards error pakage
