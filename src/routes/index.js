const authRouter = require('./authRoute')
const dataRouter = require('./dataRoute')

function routes(app) {
   app.use('/auth', authRouter)

   app.use('/datas', dataRouter)

   app.use('/', (req, res) => {
      res.send('<h1>This is Homepage</h1>')
   })
}

module.exports = routes
