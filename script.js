// Function to store and apply color preference
function setPreference(color) {
  // Store preference in localStorage
  localStorage.setItem('favoriteColor', color);

  // Apply the color and animate the box
  const box = document.getElementById('box');
  box.style.backgroundColor = color;

  // Trigger CSS animation
  box.classList.remove('animate'); // Reset animation
  void box.offsetWidth; // Force reflow to allow re-animation
  box.classList.add('animate');
}

// Load preference on page load
window.onload = function () {
  const savedColor = localStorage.getItem('favoriteColor');
  if (savedColor) {
    document.getElementById('box').style.backgroundColor = savedColor;
  }
};
