const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
require('./routes/auth')(app);
require('./routes/user')(app);

const PORT = process.env.PORT || 8080;

const db = require("./models");
db.sequelize.sync(); 

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Test API
app.get("/", (req, res) => {
    res.json({ message: "Ratio-c Server is Up and running." });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});