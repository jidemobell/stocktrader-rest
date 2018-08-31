const { Company } = require('../models/company');


module.exports = {
  /**
   * @param  {Object} data match companies based on company, category
   */


  baseTargets: async (country, category) => {
    try {
      const output = await Company.find({
        $and: [{ "countries": country }, { "category": category }],
      },
      ' ',
      { lean: true });
      return output;
    } catch (error) {
      return error;
    }
  },

  reduceBudget: async (winner, bid) => {
    try {
      const output = await Company.update(
        { "countryId": winner },
        { "$inc": { "budget": -bid } },
      );
      return output;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

};
