const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
chai.use(chaiHttp);

const { expect, assert } = chai;


const { baseTargets, reduceBudget } = require('../database/controller/company');
const app = require('../server');

const testUnits = {
  country: 'US',
  category: 'Automobile',
  bid: 8,
  company: 'C1',
};

const { category, country, bid, company } = testUnits;

describe('test all units', () => {
  it('should return an array of base targets', () => {
    return baseTargets(country, category).then((result) => {
      expect(result).to.be.an('array');
    });
  });

  it('should update the value of document budget', () => {
    return reduceBudget(company, bid).then((result) => {
      expect(result.ok).to.be.equal(1);
    });
  });
});

describe('application server test', () => {
  it('should return done on successful bid', (done) => {
    chai.request(app)
      .post('/exchange')
      .send(testUnits)
      .end((err, res) => {
        if (err) { return done(err); }
        expect(res).to.have.status(200);
        assert.equal('done', res.text);
        done();
      });
  });
});
