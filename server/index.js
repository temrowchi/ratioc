const express = require('express');
const bodyParser = require('body-parser')
const db = require('./queries')
const routes = require('./routes/user');

const app = express();
const port = 3000; 

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use('/', routes)

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});
