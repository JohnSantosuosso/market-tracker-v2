// window.addEventListener("load", function() {
//     const url = "https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=AAPL,MSFT,AMZN,NVDA,TSLA";
//     fetch(url, {
//       method: "GET",
//       headers: {
//         "x-api-key": "removed for security purposes"
//       }
//     })
//       .then(resp => resp.json())
//       .then(function(data) {
//         console.log(data);
//       })
//       .catch(function(error) {
//         console.error("Error fetching data:", error);
//       });
//   });
window.addEventListener("load", function() {
    const tickerData = JSON.parse(document.body.dataset.tickerData);
    console.log(tickerData);
});