// Authentication Routes Module
const express = require('express');
const controller = require("../controllers/auth");
const { validateSignUp } = require("../middleware");
const bodyParser = require('body-parser');
const auth = require('../config/auth');
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
app.post('/signup', validateSignUp.checkDuplicateEmail, controller.signup);
app.post('/signin', controller.signin);

const router = app;

module.exports = router; 