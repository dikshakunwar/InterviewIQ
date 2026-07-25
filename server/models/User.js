const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    targetRole: {
      type: String,
      default: "",
    },

    profilePicture: {
      type: String,
      default: "",
    },

    resume: {
      type: String,
      default: "",
    },

    interviewsTaken: {
      type: Number,
      default: 0,
    },

    employabilityScore: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("User", userSchema);
