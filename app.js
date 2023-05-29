// Get the element with the id "btn" and assign it to the variable "btn"
const btn = document.getElementById("btn");

// Get the element with the class "color" and assign it to the variable "color"
const color = document.querySelector(".color");

// Add a click event listener to the "btn" element
btn.addEventListener("click", function () {

  // Generate a random decimal number between 0 and 16777215 and convert it to a hexadecimal string
  const randomColorNum = Math.floor(Math.random() * 16777216).toString(16);

  // Add leading zeros and ensure the color string has six digits
  const randomColor = "#" + ("000000" + randomColorNum).slice(-6);

  // Set the background color of the document body to the generated color
  document.body.style.backgroundColor = randomColor;

  // Set the text content of the "color" element to the generated color
  color.textContent = randomColor;
});
