// script.js

// Function to change the background color of the h1 element
function changeBackgroundColor() {
    const h1Element = document.querySelector('h1');
    const colors = ['blue', 'green', 'red', 'purple', 'orange'];
    const currentColor = h1Element.style.backgroundColor;
    let newColor = colors[Math.floor(Math.random() * colors.length)];
  
    // Make sure the new color is different from the current color
    while (newColor === currentColor) {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    }
  
    h1Element.style.backgroundColor = newColor;
  }
  
  // Add event listener to the button
  document.getElementById('changeColorBtn').addEventListener('click', changeBackgroundColor);
  
  // Function to alert when an image is clicked
  function imageClickHandler(event) {
    alert('You clicked on an image!');
  }
  
  // Add event listener to all images
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('click', imageClickHandler);
  });
  