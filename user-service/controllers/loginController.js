/**
 *<p>login controller, login / user related operations</>
 */




const User = require("../model/User.model");

var express = require('express');
var router = express.Router();

const bcrypt = require('bcryptjs');


//list cases

//Login
router.post("/login", async (req, res) => {

    let userName = req.body.username;
    let password = req.body.password;
    
    let errorResponse = {error: "Invalid Login Credential"};
    
    const users = await User.find(
        {
            username: userName
        }
    );

    if (!users || users.length === 0) {
        console.log(" user not found");
        return res.json(errorResponse);
    }

    const validUser = await bcrypt.compare(password, users[0].password);

    if (validUser) {
        res.json(users[0]);
    } else {
        console.log("Invalid Login Credential");
        res.json(errorResponse);
    }
});

module.exports = router;

