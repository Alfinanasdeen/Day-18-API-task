function getDogFact() {
 
  fetch("https://dogapi.dog/api/facts")
    .then((response) => response.json())
    .then((data) => {
      const factElement = document.getElementById("fact");
      if (data && data.facts && data.facts.length > 0) {
        factElement.textContent = data.facts[0];
      } else {
        factElement.textContent = "Failed to retrieve dog facts.";
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
