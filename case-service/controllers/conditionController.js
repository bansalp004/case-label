
/**
 *<p>condition controller, condition related operations</>
 */



const Condition = require("../model/Condition.model");

var express = require('express');
var router = express.Router();


//list conditions
router.get("/conditions", async (req, res) => {
    const conditions = await Condition.find();
    res.json(conditions);
});



module.exports = router;

