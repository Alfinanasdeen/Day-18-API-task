function getMeowFact() {
 
  fetch("https://meowfacts.herokuapp.com/")
    .then((response) => response.json())
    .then((data) => {
      const factElement = document.getElementById("fact");
      factElement.textContent = data.data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
