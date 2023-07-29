window.addEventListener("load", function() {
    const url = "https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=AAPL,MSFT,AMZN,NVDA,TSLA";
    fetch(url, {
      method: "GET",
      headers: {
        "x-api-key": "D3HRkNliTO4XX2Af6U2Yv3SOsGwfXPJLFu1ibafj"
      }
    })
      .then(resp => resp.json())
      .then(function(data) {
        console.log(data);
      })
      .catch(function(error) {
        console.error("Error fetching data:", error);
      });
  });
  