// create an express app
const express = require("express")
const app = express()
const EstimationService =require("./Services/EstimationService")
const bodyParser = require('body-parser')
var jsonParser=bodyParser.json()
// use the express-static middleware
app.use(express.static("public"))

app.get('/', (req, res) => {
  res.send("<h1>Estimador</h1>");
})
app.post('/api/estimacion',jsonParser, (req, res) => {
  console.log(req.body);
  if(req.body!=undefined){
    const result = EstimationService.EstimateHousePrice(req.body);
    res.json({value:result});
  }else {
    res.send(400);
  }
});

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));