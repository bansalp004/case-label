
const Case = require("../src/Case.model");

const caseDataPopulation = () => {
    const patientCase = new Case({caseData: "This is a test case data "});
    patientCase.save();
    
};

module.exports = caseDataPopulation;
