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
    res.json(cases[0]);
});


//update case to reviewed
app.post("/case", async (req, res) => {

    let caseId = req.query.caseId;
    
    console.log("caseId" + caseId)
    const ObjectId = require('mongoose').Types.ObjectId;
    
    const query = {_id: new ObjectId(caseId)};
    await Case.updateOne(query ,{reviewed: true});
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
