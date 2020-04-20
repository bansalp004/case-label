const mongoose = require("mongoose");

const conditionSchema = new mongoose.Schema({
    name: {
        type: String
    },
    code: {
        type: String
    }
});

const condition = mongoose.model("Condition", conditionSchema);

module.exports = condition;
