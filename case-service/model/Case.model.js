const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema({
    caseData: {
        type: String
    },
    username: {
        type: String
    },
    reviewed: {
        type: Boolean
    },
    reviewedById: {
        type: String
    },
    conditionId: {
        type: String
    }
});

const Case = mongoose.model("Case", caseSchema);

module.exports = Case;
