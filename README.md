# Test Stock Exchange App

a simple stock exchange app through which external companies can buy the stocks of 
various companies via an API.
 

### Prerequisites

 it is required that you have node,npm and mongodb installed to successfully test this project 

 npm install to ensure packages and dependencies are installed.
 To start the development server on localhost:4000 simply type "npm start"

The application uses a seed data which will be run on "start" and "test"

### Installing


clone the repo  

```
git clone 
```

navigate into the root app folder and 

```
npm install
```

to run application

```
npm start
```

to test the application

```
npm test
```

## Running the tests

The app uses mocha/chai for testing

```
npm test
```

The application uses a seed data which will be run on "start" and "test"

### tesing endpoints
use you favourite REST client (e.g Postman, Insomnia) to test all routes

This application uses a single endpoint for a successful bid, simple pass
data using a REST client and run.

```
 localhost:4000/exchange
```

```
sample request:
http://localhost:4000/exchange?countrycode=US&Category=Automobile&BaseBid=10
```

## Built With

* [Express](http://expressjs.com)
* [mongoose](https://mongoosejs.com)
* [mocha](https://mochajs.org)
* [mongoose-seed](https://www.npmjs.com/search?q=mongoose-seed)

 
## Authors

* **Jide Olaniyan** 


