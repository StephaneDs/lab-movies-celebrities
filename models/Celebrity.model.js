//  Add your code here
const { Schema, SchemaTypes, model } = require("mongoose")

const celebritySchema = new Schema(
  {
    name: {
      type: String,
    },
    occupation: {
      type: String,
    },
    catchPhrase: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const celebrityModel = model("Celebrity", celebritySchema)

module.exports = celebrityModel
