var url =
  "http://data.fixer.io/api/latest?access_key=b26a227339883b25230eb2af24fdde14&base=EUR&symbols=GBP,JPY,EUR,USD";

function recupererValeur() {
  $.ajax({
    url: url,
    type: "GET",
    success: function (res, status, req) {
      var rates = res.rates;
      var fromAmount = document.getElementById("fromAmount").value;
      var from = document.getElementById("from").value;
      var to = document.getElementById("to").value;
      var result = (fromAmount * rates[to]) / rates[from];
      // console.log(result);
      document.getElementById("toAmount").value = result;
    }, // Callback
  });
}
