function getDogFact() {
  // Make a request to the Dog API
  fetch("https://dogapi.dog/api/facts")
    .then((response) => response.json())
    .then((data) => {
      // Update the DOM with the retrieved fact
      const factElement = document.getElementById("fact");

      // Check if the data structure matches the expected format
      if (data && data.facts && data.facts.length > 0) {
        factElement.textContent = data.facts[0]; // Display the first fact
      } else {
        factElement.textContent = "Failed to retrieve dog facts.";
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
