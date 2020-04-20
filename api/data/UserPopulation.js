const User = require("../src/User.model");

const userDataPopulation = () => {

    const users =
        [{username: "user1@gmail.com", password: "test123", firstName : "Dr. Joe", lastName:"Smith"},
         {username: "user2@gmail.com", password: "test123", firstName : "Dr. Neelam", lastName:"Khatri"}];

    User.insertMany(users).then(() => {
        console.log("inserted users successfully")
    });

};

module.exports = userDataPopulation;