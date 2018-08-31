const env = process.env.NODE_ENV;
const seeder = require('mongoose-seed');

const data = [
  {
    'model': 'Company',
    'documents': [
      {
        "companyId": "C1",
        "countries": ["US", "FR"],
        "budget": 1,
        "bid": 0.10,
        "category": ["Automobile", "Finance"],
      },
      {
        "companyId": "C2",
        "countries": ["IN", "US"],
        "budget": 2,
        "bid": 0.30,
        "category": ["Finance", "IT"],
      },
      {
        "companyId": "C3",
        "countries": ["US", "RU"],
        "budget": 3,
        "bid": 0.05,
        "category": ["IT", "Automobile"],
      },
    ],
  },
];

const url = (env !== 'test') ? 'mongodb://localhost/stocktrader' : 'mongodb://localhost/stocktradertest';

seeder.connect(url, () => {
  seeder.loadModels(['./database/models/company.js']);

  seeder.clearModels(['Company'], () => {
    seeder.populateModels(data, () => {
      seeder.disconnect();
    });
  });
});
