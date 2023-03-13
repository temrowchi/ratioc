const express = require('express');
const bodyParser = require('body-parser')
const routes = require('./routes/index');

const db = require("./models");
db.sequelize.sync(); 

const app = express();
const port = process.env.PORT || 8080;; 

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get("/", (req, res) => {
    res.json({ message: "Ratio-c Server is Up and running." });
});

// Define the call routes.
app.use('/api/auth/', routes.authRoute)
app.use('/api/user/', routes.userRoute)

app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});