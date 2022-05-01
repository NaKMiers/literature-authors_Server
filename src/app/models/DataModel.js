// const mongoose = require('mongoose')
// const Schema = mongoose.Schema

// const BlogModel = new Schema(
//    {
//       userId: String,
//       statusText: String,
//       hearts: [String],
//       type: { type: String, default: 'blog' },
//    },
//    { timestamps: true }
// )

// module.exports = mongoose.model('Blogs', BlogModel)

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DataModel = new Schema(
   {
      lesson: String,
      author: String,
      content: String,
      bg1: String,
      bg2: String,
      bg3: String,
      color1: String,
      color2: String,
      color3: String,
      width: Number,
   },
   {
      timestamps: true,
   }
)

module.exports = mongoose.model('Datas', DataModel)
