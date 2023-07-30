var currentData = JSON.parse($('#ticker-data').attr('data-ticker-data'));
  var tickerInterval;

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
    var tickerContentElement = $('#ticker-content');
    tickerContentElement.empty();

    var currentIndex = 0;
    var isFirstLoop = true;

    function displayNextDataElement() {
      if (!isFirstLoop && currentIndex === 0) {
        // Stop the loop if it's not the first loop and we have reached the beginning of data
        return;
      }

      var item = data[currentIndex % data.length];
      var changeValue = item.change.toFixed(2); // Round the 'change' value to two decimal places
      var changeClass = item.change < 0 ? 'negative-change' : 'positive-change';
      var itemHTML = '<p>' + item.name + ' (' + item.symbol + ')</p>' +
                     '<p>Price: ' + item.price + '</p>' +
                     '<p class="' + changeClass + '">Change: ' + changeValue + '</p>' +
                     '<hr>';

      tickerContentElement.html(itemHTML);

      currentIndex++;
      isFirstLoop = false;

      setTimeout(function() {
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