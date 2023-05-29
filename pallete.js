// Get the button element with the ID "btn"
const btn = document.getElementById("btn");

// Get the element with the class "color-palette"
const colorPalette = document.querySelector(".color-palette");

// Add a click event listener to the button
btn.addEventListener("click", function () {
  // Generate an array of random colors in hexadecimal format (#RRGGBB)
  const colors = generateRandomColors(5);

  // Set the background color of each color box in the palette
  colors.forEach((color, index) => {
    const colorBox = colorPalette.children[index];
    colorBox.style.backgroundColor = color;
    colorBox.textContent = color;
  });
});

// Generate an array of random colors
function generateRandomColors(numColors) {
  const colors = [];
  for (let i = 0; i < numColors; i++) {
    const randomColor = Math.floor(Math.random() * 16777216).toString(16);
    const color = "#" + ("000000" + randomColor).slice(-6);
    colors.push(color);
  }
  return colors;
}
