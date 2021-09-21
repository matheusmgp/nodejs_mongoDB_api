const express = require('express')
require('./infra/database/index')
require('dotenv').config()


const app = express()   


app.use(express.json())
app.use(express.urlencoded({ extended: true}))
//app.use(routes)
require('./routes/routes')(app)
const PORT = process.env.SERVER_PORT || 3000


app.listen(PORT, () => console.log(`RUNNING on port: ${PORT}`))