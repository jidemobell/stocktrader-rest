const fs = require('fs');

const logger = (log, logMessage) => {
  const now = new Date().toString();
  const input = `${now}:${logMessage}:${log}`;
  fs.appendFile('server.log', `${input}  ${'\n'}`, (err) => {
    if (err) { throw err; }
  });
};


const parseDataForLog = (startingList, array, action) => {
  const filteredCompanies = [];
  const logArray = [];
  const nextListedArray = [];
  array.map((data) => {
    for (const [key, value] of Object.entries(data)) {
      if (key === 'companyId') {
        filteredCompanies.push(value);
      }
    }
  });
  const iterator = startingList.entries();
  for (const e of iterator) {
    if (filteredCompanies.includes(e[1])) {
      logArray.push(`{${e[1]},passed}`);
      nextListedArray.push(e[1]);
    } else {
      logArray.push(`{${e[1]},failed}`);
    }
  }
  logger(logArray, action);
  return nextListedArray;
};


module.exports = {
  parseDataForLog,
  logger,
};
