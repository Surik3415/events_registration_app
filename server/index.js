require('dotenv').config()

const express = require('express')

const sequelize = require('./bd')

const PORT = process.env.PORT || 5000

const models = require('./models/models')

const router = require('./routes/index')

const cors = require('cors')

const errorHandler = require('./middleware/errorHandlingMiddleware')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

//handler should be last
app.use(errorHandler)


const start = async() => {
  try{
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Server starts on PORT ${PORT}`))
  } catch(err) {
    console.log(err)
  }
}



start()