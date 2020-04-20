const express = require("express");
const app = express();
const connectDb = require("./src/connection");
const User = require("./src/User.model");
const PatientCase = require("./src/Case.model");
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
    const cases = await PatientCase.find();
    res.json(cases);
});


app.listen(PORT, function () {
    console.log(`Listening on ${PORT}`);

    connectDb().then(() => {
        console.log("MongoDb connected");

        console.log("inserting sample users");
        userDataPopulation();
        

        console.log("inserting conditions");
        conditionDataPopulation();


        console.log("inserting conditions");
        caseDataPopulation();
        

    });

});
