# Doctor Case Label

- Doctor Case Labelling EHR System, Once login, bring assigned cases for them to review, each case can be tagged by a condition, 
once click next, next ordered case is made available for review.  

- its a micro-service based project which total 2 services and static html files to deliver UI 
1. user-service (maintain user operation)
2. case-service (maintain case related operations)
3. ui - deployed inside Ngnix 

## How to run (Nginx + services + mongodb)
1. In your terminal, navigate to home directory
2. docker-compose up (this also populates test data for users (doctors), cases and conditions) - wait couple of mins until all services are up
3. open browser and hit http://localhost/ (should bring login page)
4. Login with "user1@gmail.com" or "user2@gmail.com" both account passwor is : test123   (we have inserted and assigned 4 cases to each account)

4. Backend API server starts on port 8080 (user-service) and 8081 (case-service)
5. MongoDB server starts at port 27017 and exposed to connect out of docker context.   


## health checks 
1. user-service http://localhost:8080/status should return "OK"
2. case-service http://localhost:8081/status should return "OK"


## sevice interaction diagram
<p align="center">
  <img src="https://drive.google.com/uc?export=view&id=17mAMT1Ps7k5pck7vcMiqyPPm8fU3loKp"/>
  <br/>
</p>

## data-model diagram
<p align="center">
  <img src="https://drive.google.com/uc?export=view&id=1eiMfzaeYzSENbaDO0Gup1MCAO5jpfECo"/>
  <br/>
</p>

## user manual
https://docs.google.com/document/d/1NeD6ytZRzrMz7-ZaU-3tepCT4Wj-NZZqAVT6m8sIpGU/edit?usp=sharing


