const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema({
    caseData: {
        type: String
    }
});

const Case = mongoose.model("Case", caseSchema);

module.exports = Case;
