const express = require("express");
const app = express();
const connectDb = require("./util/connection");

const userDataPopulation = require("./data/UserPopulation");

const cors = require('cors');

const PORT = 8080;
app.use(express.json());      
app.use(express.urlencoded());
app.use(cors());


var login = require('./controllers/loginController.js');

app.use('/', login);


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
}
