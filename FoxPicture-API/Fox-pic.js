const apiUrl = "https://randomfox.ca/floof/";

const imageArea = document.getElementById("Fox-Picture");

const loadFoxImage = ({ image }) => { 
   const imgElement = document.createElement("img");
   imgElement.src = image;
   imageArea.appendChild(imgElement);
}
 
const getRandomFox = async () => {  
  const response = await fetch(apiUrl);
  const data = await response.json();
  imageArea.innerHTML ="";
  loadFoxImage(data);  
};

getRandomFox();
