const mongoose = require("mongoose");
const DepSchema = mongoose.Schema({
  name: String,
  doctor: [
    {
      docName: String,
      expirence: String,
      language: String,
      email: String,
      hours: String,
    },
  ],
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "hospital",
  },

  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

const department = mongoose.model("department", DepSchema);
module.exports = department;

//react-toastify  cards error pakage
