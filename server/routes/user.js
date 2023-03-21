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
app.get('/board', controller.userBoard);
app.get('/search/all', auth.verifyToken,controller.findAllUsers);
app.get('/search/email/:email', auth.verifyToken, controller.findUserByEmail);
app.get('/search/id/:id', auth.verifyToken, controller.findUserById);
app.get('/search/name/:name', auth.verifyToken, controller.findByName);
app.post('/addFriend', auth.verifyToken, controller.addFriend);

const router = app;

module.exports = router; 