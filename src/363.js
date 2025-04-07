// Example of generating random numbers using Math.random()
console.log(Math.random());

// Example of accessing the window object in JavaScript
window.alert("Hello, World!");

// Example of accessing an element within a parent div with id "mainDiv"
const mainDiv = document.getElementById("mainDiv");
if (mainDiv) {
  // Do something with the element
}

// Example of calling a function using the current event listener context
document.addEventListener("click", function(event) {
  console.log(`You clicked on an element: ${event.target.textContent}`);
});
