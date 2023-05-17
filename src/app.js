const express = require("express")
const app = express()
const path = require("path")

//navegador puede acceder a la carpeta public
app.use(express.static(path.join(__dirname,"public")))

//export default app;
module.exports=app;