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
    }
});

const Case = mongoose.model("Case", caseSchema);

module.exports = Case;
