// User Routes Module
const express = require('express');
const controller = require("../controllers/user");
const { auth } = require("../middleware");
const bodyParser = require('body-parser');
const app  = express.Router();  

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(function(req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

// Determine the different calls.
app.get('/all', controller.allAccess);
app.get('/board', auth.verifyToken, controller.userBoard);

const router = app;

module.exports = router; 