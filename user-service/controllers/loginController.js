/**
 *<p>login controller, login / user related operations</>
 */




const User = require("../model/User.model");

var express = require('express');
var router = express.Router();


//list cases

//Login
router.post("/login", async (req, res) => {

    let userName = req.body.username;
    let password = req.body.password;
    const users = await User.find(
        {
            username: userName,
            password: password
        }
    );

    if (!users || users.length === 0) {
        users[0] = {error: "Invalid Login Credential"};
    }

    res.json(users[0]);
});

module.exports = router;

