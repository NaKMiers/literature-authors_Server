const md5 = require('md5')

class AuthController {
   // [POST]: /auth/check-admin
   checkAdmin = async function (req, res) {
      console.log('checkAdmin')
      const value = md5(req.body.value)

      try {
         res.status(200).json({ isAdmin: value === md5(process.env.PASSWORD) })
      } catch (err) {
         res.status(500).json(err)
      }
   }
}

module.exports = new AuthController()
