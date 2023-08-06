var currentData = JSON.parse($('#ticker-data').attr('data-ticker-data'));

function refreshTickerData() {
  $.ajax({
    url: '/refresh_ticker_data',
    type: 'GET',
    dataType: 'json',
    data: { current_data: currentData },
    success: function(data) {
      $('#ticker-data').attr('data-ticker-data', JSON.stringify(data));
      // Start the new loop with updated data
      showTickerDataSequentially(data);
    },
    error: function(xhr, status, error) {
      console.error('Error refreshing ticker data:', status, error);
      setTimeout(refreshTickerData, 25000);
    }
  });
}

function showTickerDataSequentially(data) {
  var tickerContentElement = $('#ticker-content');

  var currentIndex = 0;

  function displayStock() {
    if (currentIndex >= data.length) {
      // If we have reached the end of data, initiate the next refresh
      refreshTickerData();
      return;
    }

    var item = data[currentIndex];
    var changeValue = item.change.toFixed(2);
    var changeClass = item.change < 0 ? 'negative-change' : 'positive-change';
    var changePrice = item.price.toFixed(2);
    var itemHTML = '<span>' + item.symbol + ' ' + changePrice + '</span>' +
                   '<span class="' + changeClass + '"> ' + changeValue + '%' + '</span>' +
                   '<hr>';

    tickerContentElement.html(itemHTML);

    // Show the ticker element
    tickerContentElement.show();

    // Set a timeout to hide the ticker element after 5 seconds
    setTimeout(function() {
      tickerContentElement.hide(); // Hide the ticker element after 5 seconds
      currentIndex++; // Move to the next data element
      displayStock(); // Call the function again to display the next element
    }, 5000);
  }

  // Start displaying the data elements sequentially
  displayStock();
}

$(document).ready(function() {
  refreshTickerData();
});
