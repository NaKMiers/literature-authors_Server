const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DataModel = new Schema(
   {
      lesson: String,
      author: String,
      content: String,
      image: String,
   },
   {
      timestamps: true,
   }
)

module.exports = mongoose.model('Datas', DataModel)
