const express = require('express');
const fs = require('fs');
var bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const userDetails = require('./mock/user_db.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Get user details
app.get('/getUserDetails', (req, resp) => {
    var filteredUser = userDetails.filter((user) => {
        return new Date(user.birthday).getFullYear() == req.query.year
     });
    resp.send(filteredUser);
})

app.listen('8081', () => {
    console.log("server listening to the port 8081:");
})