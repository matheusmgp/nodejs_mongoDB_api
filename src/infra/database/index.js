const mongoose = require('mongoose')


const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = process.env

mongoose.connect(
  `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`,
  {
    useNewUrlParser: true,
    useUnifiedTopology:true
  }
 /* ,
  function(err){
    if(err)  console.log(err)
    else console.log('MongoDB succesfuly connected')
  }*/
)

mongoose.connection.on('error', () => console.error('connection error:'))
mongoose.connection.once('open', () => console.log('database connected'))

mongoose.Promise = global.Promise

module.exports = mongoose