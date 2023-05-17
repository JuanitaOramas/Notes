
//cargar .env
require('dotenv').config();

console.log(process.env.MONGODB_URI)

module.exports=process.env.MONGODB_URI;