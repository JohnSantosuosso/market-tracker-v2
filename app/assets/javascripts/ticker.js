// Check if the event listener has already been added
if (!window.loadEventAdded) {
    window.loadEventAdded = true;
    console.log("Window load event triggered!");
  
    document.addEventListener("DOMContentLoaded", function() {
      const tickerData = JSON.parse(document.body.dataset.tickerData);
      // console.log(tickerData);
      const tickerContainer = document.getElementById("companyAttributesContainer");
  
      function displayCompanyAttributes(companies, index) {
        if (index < companies.length) {
          const company = companies[index];
          const companyElement = document.createElement("div");
          companyElement.style.opacity = 0;
          companyElement.innerText = `Company: ${company.name}, Price: ${company.price}`;
          tickerContainer.appendChild(companyElement);
          fadeInElement(companyElement, () => {
            // Call the function recursively for the next company after a short delay
            setTimeout(() => {
              tickerContainer.removeChild(companyElement);
              displayCompanyAttributes(companies, index + 1);
            }, 2000); // 2000ms (2 seconds) delay before the next company is shown
          });
        }
      }
  
      function fadeInElement(element, callback) {
        let opacity = 0;
        const fadeInInterval = setInterval(function() {
          if (opacity < 1) {
            opacity += 0.1;
            element.style.opacity = opacity;
          } else {
            clearInterval(fadeInInterval);
            // Execute the callback after the element is fully faded in
            if (callback) {
              callback();
            }
          }
        }, 100); // 100ms interval for the fade-in effect
      }
  
      displayCompanyAttributes(tickerData, 0);
    });
  }
  