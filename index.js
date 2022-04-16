const express = require("express")
const app = express()
const path = require("path")

app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname+'/public/index.html')) 
})

app.get('/invitar', (req, res) => {
res.sendFile(path.join(__dirname+'/public/invitar.html')) 
})

app.listen(3000, () => {
  console.log("Server in port")
})