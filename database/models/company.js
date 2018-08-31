const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const CompanySchema = new mongoose.Schema({
  companyId: { type: String, required: true, unique: true },
  countries: { type: Array, "default": [] },
  budget: { type: Schema.Types.Number },
  bid: { type: Schema.Types.Number },
  category: { type: Array, "default": [] },
});

const Company = mongoose.model('Company', CompanySchema);

module.exports = { Company };
