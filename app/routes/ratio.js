var express = require('express'),
    router = express.Router()
    fileLoader = require('./../lib/file-loader');


var ratioData = {};
fileLoader('rates.csv', function(data) {
  ratioData = data;
})


var searchForCurrency = function(currency) {
  var result = ratioData.filter(function (element) {
      return element.code === currency;
  });

  if (result.length > 0) {
    return result[0].rate;
  }

  return undefined;
}

router.get('/ratio/:from/:to', function(req, res) {
  var currencyFrom = searchForCurrency(req.params.from);
  var currencyTo = searchForCurrency(req.params.to);

  if (isNaN(currencyFrom) || isNaN(currencyTo)) {
    res.status(500).send('Wrong currency code');
  }

  var ratio = currencyFrom / currencyTo;
  res.json({
    ratio: ratio
  });
})


module.exports = router
