# Doctor Case Label

- Doctor Case Labelling EHR System, Once login, bring assigned cases for them to review, each case can be tagged by a condition, 
once click next, next ordered case is made available for review.  

- its a micro-service based project which has 2 services - user-service (maintain user operation), case-service (maintain case related operations)

## How to run (backend services + mongodb)
1. In your terminal, navigate to home directory
2. docker-compose up (this ll also populate test data for users (doctors), cases and conditions.
3. Backend API server starts on port 8080 (user-service) and 8081 (case-service) open your browser and hit http://localhost:8080/status make sure you receive "OK"
4. MongoDB server starts at port 27017 and exposed to connect out of docker context.   

## How to run the Client
1. In another terminal, navigate to the `ui` directory (inside home).
2. Run `npm install` to install all dependencies.
3. Run `npm start` to start the app

## Check if all good
1. While client is running, open your browser in http://localhost:3000/
2. enter user name as "user1@gmail.com" and password as : test123
3. we have 4 cases inserted default to review

## sevice interaction diagram
<p align="center">
  <img src="https://drive.google.com/uc?export=view&id=1VK9CF-84OhI7Z_-t5oH-LQ0UnwyIg6uJ"/>
  <br/>
</p>


## data-model diagram
<p align="center">
  <img src="https://drive.google.com/uc?export=view&id=1eiMfzaeYzSENbaDO0Gup1MCAO5jpfECo"/>
  <br/>
</p>

## user manual

<p align="center">
  <img src="https://docs.google.com/document/d/1NeD6ytZRzrMz7-ZaU-3tepCT4Wj-NZZqAVT6m8sIpGU/edit?usp=sharing"/>
  <br/>
</p>

