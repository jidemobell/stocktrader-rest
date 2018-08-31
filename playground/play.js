const test = [
	{
		"countries": [
			"US",
			"FR"
		],
		"category": [
			"Automobile",
			"Finance"
		],
		"_id": "5b86f1bcceee6e195c2aef98",
		"companyId": "C1",
		"budget": 1,
		"bid": 0.1,
		"__v": 0
	},
	{
		"countries": [
			"US",
			"RU"
		],
		"category": [
			"IT",
			"Automobile"
		],
		"_id": "5b86f1bcceee6e195c2aef9a",
		"companyId": "C3",
		"budget": 3,
		"bid": 0.05,
		"__v": 0
	}
]

const checkBudget = (array) => {
  console.log('array found', array);
  return new Promise((resolve, reject) => {
    const filteredCompanies = [];
    const newData = [];
    array.map((data) => {
      for (const [key, value] of Object.entries(data)) {
        console.log('KEY:VAL PAIR', `${key}:${value}`);
        if (key === 'budget' && value > 0) {
          filteredCompanies.push(data.companyId);
          newData.push(data);
          console.log('new data', newData);
          console.log('new components', filteredCompanies);
        }
      }
    });
    resolve({
      data: newData,
      listed: filteredCompanies,
    });
  });
};


checkBudget(test).then((res) => {
  console.log(res);
}).catch(err => console.log(err));
