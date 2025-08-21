const mongoose = require("mongoose"); // <-- you forgot this line

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { collection: "users" } // ✅ matches Compass collection
);

module.exports = mongoose.model("User", userSchema);