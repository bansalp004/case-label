# Doctor Case Label

- Doctor Case Labelling EHR System, Bring cases assigned to a doctor for them to be able to review, each case can be tagged by a condition, 
once user click next, next case is made available for review  

## How to run (backend api + mongodb)
1. In your terminal, navigate to home directory
2. docker-compose up (this ll also populate test data for users (doctors), cases and conditions.
3. Backend API server starts on port 8080 open your browser and hit http://localhost:8080/status make sure you receive "OK"  

## How to run the Client
1. In another terminal, navigate to the `client` directory.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to start the app

## Check if all good
1. While client is running, open your browser in http://localhost:3000/
2. enter user name as "user1@gmail.com" and password as : test123