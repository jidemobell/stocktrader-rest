const checkBudget = (array) => {
  return new Promise((resolve, reject) => {
    const filteredCompanies = [];
    const newData = [];
    array.map((data) => {
      for (const [key, value] of Object.entries(data)) {
        if (key === 'budget' && value > 0) {
          filteredCompanies.push(data.companyId);
          newData.push(data);
        }
      }
    });
    resolve({
      dataAtBudget: newData,
      listed: filteredCompanies,
    });
  });
};

const baseBid = (array, bid) => {
  return new Promise((resolve, reject) => {
    const filteredCompanies = [];
    const newData = [];
    array.map((data) => {
      for (const [key, value] of Object.entries(data)) {
        if (key === 'bid' && bid > value) {
          filteredCompanies.push(data.companyId);
          newData.push(data);
        }
      }
    });
    resolve({
      dataAtBid: newData,
      listed: filteredCompanies,
    });
  });
};

const shortList = (array) => {
  let max = 0;
  let winner = '';
  array.map((data) => {
    for (const [key, value] of Object.entries(data)) {
      if (key === 'bid' && value > max) {
        max = value;
        winner = data.companyId;
      }
    }
  });
  return winner;
};

module.exports = {
  checkBudget,
  baseBid,
  shortList,
};
