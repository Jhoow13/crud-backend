const { Schema, model } = require("mongoose");

const ClienteSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  value: Boolean
});

module.exports = model("Cliente", ClienteSchema);
