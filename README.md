# Doctor Case Label

- Doctor Case Labelling EHR System, Once login, bring assigned cases for them to review, each case can be tagged by a condition, 
once click next, next ordered case is made available for review.  

## How to run (backend api + mongodb)
1. In your terminal, navigate to home directory
2. docker-compose up (this ll also populate test data for users (doctors), cases and conditions.
3. Backend API server starts on port 8080 open your browser and hit http://localhost:8080/status make sure you receive "OK"
4. MongoDB server starts at port 27017 and exposed to connect out of docker context.   

## How to run the Client
1. In another terminal, navigate to the `client` directory.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to start the app

## Check if all good
1. While client is running, open your browser in http://localhost:3000/
2. enter user name as "user1@gmail.com" and password as : test123

## sevice interaction diagram
<p align="center">
  <img src="https://drive.google.com/open?id=13UJji9IwnV3RFC2aVWUWImTS2jS0srIl"/>
  <br/>
</p>


## data-model diagram
<p align="center">
  <img src="https://drive.google.com/open?id=1DO4y1M8QPzFyxv2UH0BjS0O07B0O8T5b"/>
  <br/>
</p>