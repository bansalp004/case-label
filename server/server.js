const express = require("express");
const app = express();
const connectDb = require("./util/connection");
const conditionDataPopulation = require("./data/ConditionPopulation");
const userDataPopulation = require("./data/UserPopulation");
const caseDataPopulation = require("./data/CasePopulation");

const cors = require('cors');

const PORT = 8080;
app.use(express.json());      
app.use(express.urlencoded());
app.use(cors());


var cases = require('./controllers/caseController.js');
var login = require('./controllers/loginController.js');
var condition = require('./controllers/conditionController');

app.use('/', cases);
app.use('/', login);
app.use('/', condition);



//health check API
app.get("/status", async (req, res) => {
    res.json("ok");
});



app.listen(PORT, function () {
    console.log(`Listening on ${PORT}`);

    connectDb().then(() => {
        populateTestData();

    });

});

function populateTestData() {
    console.log("MongoDb connected");

    console.log("inserting sample users");
    userDataPopulation();

    console.log("inserting conditions");
    conditionDataPopulation();

    console.log("inserting conditions");
    caseDataPopulation();
}
