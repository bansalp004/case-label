/**
 *<p>case controller, operation related to cases </>
 */


const Case = require("../model/Case.model");

var express = require('express');
var router = express.Router();


//list cases
router.get("/cases", async (req, res) => {
    const cases = await Case.find();
    res.json(cases);
});


//get case details
router.get("/case", async (req, res) => {

    let userName = req.query.userName;
    const cases = await Case.find(
        {
            username: userName,
            reviewed: false
        }
    );

    if (!cases || cases.length === 0) {
        cases[0] = {caseData: "You are Done"};
    }

    res.json(cases[0]);
});


//update case to reviewed
router.post("/case", async (req, res) => {

    console.log(req.body);

    const caseId = req.body.caseId;
    const condition = req.body.condition;
    const userId = req.body.userId;

    console.log("caseId" + caseId + " condition: " + condition + " userId: " + userId)
    const ObjectId = require('mongoose').Types.ObjectId;

    const query = {_id: new ObjectId(caseId)};
    await Case.updateOne(query, {reviewed: true, conditionId: condition, reviewedById: userId});
    res.json({});
});


module.exports = router;

