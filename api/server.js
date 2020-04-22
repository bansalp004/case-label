const express = require("express");
const app = express();
const connectDb = require("./src/connection");
const User = require("./src/User.model");
const Case = require("./src/Case.model");
const Condition = require("./src/Condition.model");
const conditionDataPopulation = require("./data/ConditionPopulation");
const userDataPopulation = require("./data/UserPopulation");
const caseDataPopulation = require("./data/CasePopulation");

const cors = require('cors');

const PORT = 8080;

app.use(cors());

app.get("/users", async (req, res) => {
    const users = await User.find();

    res.json(users);
});

app.get("/conditions", async (req, res) => {
    const conditions = await Condition.find();

    res.json(conditions);
});

app.get("/status", async (req, res) => {
    res.json("ok");
});



app.get("/user-create", async (req, res) => {
    const user = new User({username: "userTest"});

    await user.save().then(() => console.log("User created"));

    res.send("User created \n");
});


//list cases
app.get("/cases", async (req, res) => {
    const cases = await Case.find();
    res.json(cases);
});


//get case for a doctor
app.get("/case", async (req, res) => {

    let userName = req.query.userName;
    const cases = await Case.find(
        {
            username: userName,
            reviewed: false
        }
    );
    
    if (! cases || cases.length === 0){
        cases[0] = {caseData : "You are Done"};
    }
    
    res.json(cases[0]);
});

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies


//Login
app.post("/login", async (req, res) => {

    let userName = req.body.username;
    let password = req.body.password;
    const users = await User.find(
        {
            username: userName,
            password: password
        }
    );

    if (! users || users.length === 0){
        users[0] = {error : "Invalid Login Credential"};
    }

    res.json(users[0]);
});

//update case to reviewed
app.post("/case", async (req, res) => {

    console.log(req.body);
    
    const caseId = req.body.caseId;
    const condition = req.body.condition;
    const userId = req.body.userId;

    console.log("caseId" + caseId + " condition: " + condition + " userId: " + userId)
    const ObjectId = require('mongoose').Types.ObjectId;
    
    const query = {_id: new ObjectId(caseId)};
    await Case.updateOne(query, {reviewed: true, conditionId: condition, reviewedById: userId});
    res.json({});
});


app.listen(PORT, function () {
    console.log(`Listening on ${PORT}`);

    connectDb().then(() => {
        console.log("MongoDb connected");

        console.log("inserting sample users");
        //userDataPopulation();
        

        console.log("inserting conditions");
        //conditionDataPopulation();


        console.log("inserting conditions");
        //caseDataPopulation();
        

    });

});
