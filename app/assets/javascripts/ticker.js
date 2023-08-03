var currentData = JSON.parse($('#ticker-data').attr('data-ticker-data'));
var tickerInterval;
var isTickerRunning = false; // Flag to track if ticker loop is currently running

function refreshTickerData() {
  $.ajax({
    url: '/refresh_ticker_data',
    type: 'GET',
    dataType: 'json',
    data: { current_data: currentData },
    success: function(data) {
      $('#ticker-data').attr('data-ticker-data', JSON.stringify(data));
      // Clear the existing interval before restarting the loop with updated data
      clearInterval(tickerInterval);
      // Start the new loop with updated data
      showTickerDataSequentially(data);
      tickerInterval = setInterval(refreshTickerData, 25000);
    },
    error: function(xhr, status, error) {
      console.error('Error refreshing ticker data:', status, error);
      setTimeout(refreshTickerData, 25000);
    }
  });
}

function showTickerDataSequentially(data) {
  if (isTickerRunning) {
    // If the ticker loop is already running, return and don't start a new instance
    return;
  }

  isTickerRunning = true;
  var tickerContentElement = $('#ticker-content');
  tickerContentElement.empty();

  var currentIndex = 0;
  var isFirstLoop = true;
  var timeoutId; // Declare a variable to store the timeout ID

  function displayNextDataElement() {
    if (!isFirstLoop && currentIndex === 0) {
      // Stop the loop if it's not the first loop and we have reached the beginning of data
      isTickerRunning = false;
      return;
    }

    var item = data[currentIndex % data.length];
    var changeValue = item.change.toFixed(2); // Round the 'change' value to two decimal places
    var changeClass = item.change < 0 ? 'negative-change' : 'positive-change';
    var changePrice = item.price.toFixed(2);
    var itemHTML = '<p>' + item.name + ' (' + item.symbol + ')</p>' +
                   '<p>' + changePrice + '</p>' +
                   '<p class="' + changeClass + '"> ' + changeValue + '%' + '</p>' +
                   '<hr>';

    tickerContentElement.html(itemHTML);

    currentIndex++;
    isFirstLoop = false;

    // Clear any previous timeout before scheduling a new one
    clearTimeout(timeoutId);

    timeoutId = setTimeout(function() {
      displayNextDataElement();
    }, 5000);
  }

  // Start the initial loop
  displayNextDataElement();
}

$(document).ready(function() {
  // Start the initial loop on page load
  showTickerDataSequentially(currentData);

  // Refresh the data every 60 seconds
  tickerInterval = setInterval(refreshTickerData, 25000);
});
