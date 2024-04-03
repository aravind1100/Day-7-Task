/* 1.Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
a. Get all the countries from Asia continent /region using Filter function */

const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  var res = result.filter((ele) => ele.region === "Asia");
  var final = res.forEach((ele) => console.log(ele.name.common));
};

//b.Get all the countries with a population of less than 2 lakhs using Filter function

const request1 = new XMLHttpRequest();
request1.open("GET", "https://restcountries.com/v3.1/all", true);
request1.send();
request1.onload = function () {
  var data = request1.response;
  var result = JSON.parse(data);
  var newResult = result.filter((ele) => ele.population < 200000);
  var final = newResult.forEach((ele) => console.log(ele.name.common));
};

//c.Print the following details name, capital, flag, using forEach function

const request2 = new XMLHttpRequest();
request2.open("GET", "https://restcountries.com/v3.1/all", true);
request2.send();
request2.onload = function () {
  let data = request2.response;
  let result = JSON.parse(data);
  result.forEach((ele) => {
    console.log(
      `Name: ${ele.name.common}, Capital: ${ele.capital}, Flag: ${ele.flags.png}`
    );
  });
};

// d. Print the total population of countries using reduce function

const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all", true);
req.send();
req.onload = function () {
  var data = req.response;
  var result = JSON.parse(data);
  var totalpop = result.reduce((sum, cv) => {
    return sum + cv.population;
  }, 0);
  console.log("Total population of countries:", totalpop);
};

// e. Print the country that uses US dollars as currency.

const req1 = new XMLHttpRequest();
req1.open("GET", "https://restcountries.com/v3.1/all", true);
req1.send();
req1.onload = function () {
  let data = req1.response;
  let result = JSON.parse(data);
  var countriesUsingUSD = result.filter((country) => {
    const currencies = country.currencies;
    return currencies && currencies.USD;
  });
  countriesUsingUSD.forEach((ele) => {
    console.log(ele.name.common);
  });
};

//----------------------------------------------------------------------------------------------