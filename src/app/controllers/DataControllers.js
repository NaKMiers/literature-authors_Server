const DataModel = require('../models/DataModel')

class DataControllers {
   // [GET]: /datas/get
   getData = async function (req, res) {
      console.log('getData')
      try {
         const data = await DataModel.find({})

         res.status(200).json(data)
      } catch (err) {
         res.status(500).json(err)
      }
   }

   // [PUT]: /datas/edit/:id
   editData = async function (req, res) {
      console.log('editData')
      const { id } = req.params
      const { data } = req.body

      try {
         const newData = await DataModel.findOneAndUpdate(
            { _id: id },
            {
               $set: {
                  content: data,
               },
            }
         )
         res.status(200).json(newData)
      } catch (err) {
         res.status(500).json(err)
      }
   }
}

module.exports = new DataControllers()
