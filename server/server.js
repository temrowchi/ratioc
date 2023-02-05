const express = require('express');
const bodyParser = require('body-parser')
const routes = require('./routes/user');

const app = express();
const port = 3000; 

app.use('/', routes) //Use router
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});
