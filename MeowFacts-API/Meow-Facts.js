function getMeowFact() {
  // Make a request to the Meow Facts API
  fetch("https://meowfacts.herokuapp.com/")
    .then((response) => response.json())
    .then((data) => {
      // Update the DOM with the retrieved fact
      const factElement = document.getElementById("fact");
      factElement.textContent = data.data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
