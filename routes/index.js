const express = require('express');

const { baseTargets, reduceBudget } = require('../database/controller/company');
const { logger, parseDataForLog } = require('../helperFunctions/helpers');
const { checkBudget, baseBid, shortList } = require('../helperFunctions/trade');

const routes = express.Router();


routes.get('/exchange', (req, res) => {
  const bidData = {
    country: req.query.countrycode,
    bid: req.query.BaseBid,
    category: req.query.Category,
  };

  const listedCompanies = ['C1', 'C2', 'C3'];
  const { country, category, bid } = bidData;

  baseTargets(country, category)
    .then((doc) => {
      const targets = parseDataForLog(listedCompanies, doc, 'BaseTarget');
      return checkBudget(doc).then((list) => {
        const filtered = parseDataForLog(targets, doc, 'BudgetCheck');
        return baseBid(list.dataAtBudget, bid).then((response) => {
          parseDataForLog(filtered, response.dataAtBid, 'BaseBid');
          const winner = shortList(response.dataAtBid);
          logger(winner, 'Winner');
          return reduceBudget(winner, bid).then(() => {
            res.status(200).send('done');
          });
        });
      });
    }).catch(err => res.status(400).send(err.stack));
});


module.exports = routes;
