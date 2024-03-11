const mongoose = require("mongoose");

const { Schema } = mongoose;

const TripSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  group_of: {
    type: Number,
  },
  PhoneNumber: {
    type: Number,
    required: true,
  },
  // date: {
  //   type: Date,
  //   default: Date.now,
  // },
  // time: {
  //   type: Date,
  //   default: Date.now,
  // },
  date: {
    type: Number,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],

  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Trip = mongoose.model("Trip", TripSchema);
module.exports = Trip;
