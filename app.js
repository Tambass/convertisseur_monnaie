var url =
  "http://data.fixer.io/api/latest?access_key=b26a227339883b25230eb2af24fdde14&base=EUR&symbols=GBP,JPY,EUR,USD";

function recupererValeur() {
  $.ajax({
    url: url,
    type: "GET",
    success: function (res, status, req) {
      var rates = res.rates.value
      var fromAmount = document.getElementById("fromAmount").value;
      var from = document.getElementById("from").value;
      var to = document.getElementById("to").value;
        console.log(from, to);
    }, // Callback
  });
}
