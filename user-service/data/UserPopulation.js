const User = require("../model/User.model");

const userDataPopulation = () => {

    User.deleteMany().then( () => {
        console.log("cleaned up users")
    });
    const users =
        [{username: "user1@gmail.com", password: "$2a$10$rnf.7obDPxR0kMC/Ci1eMekSg7HqlD7tUqkK39mbG9slAoKGSxMay", firstName : "Dr. Joe", lastName:"Smith"},
         {username: "user2@gmail.com", password: "$2a$10$rnf.7obDPxR0kMC/Ci1eMekSg7HqlD7tUqkK39mbG9slAoKGSxMay", firstName : "Dr. Neelam", lastName:"Khatri"}];

    User.insertMany(users).then(() => {
        console.log("inserted users successfully")
    });

};

module.exports = userDataPopulation;