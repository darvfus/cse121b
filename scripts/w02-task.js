/* W02-Task - Profile Home Page */


/* Step 1 - Setup type tasks - no code required */
const fullName= "Daniel Romero";

/* Step 2 - Variables */
document.querySelector("#name").textContent = fullName;

/* Step 3 - Element Variables */
const currentYr = "2022";
const nameElement = document.getElementById('name');

/* Step 4 - Adding Content */
document.querySelector("#year").textContent = currentYr;
nameElement.innerHTML = `<strong>${fullName}</strong>`;

const image = "images/daniel.png";


document.querySelector("img").setAttribute("src", image);
document
  .querySelector("img")
  .setAttribute("alt", "Image of a person sitting down.");

/* ARRAYS */

// Step 1: Declare and instantiate an array variable to hold your favorite foods
const foodFavs = ["Tacos", "Tamales", "Picaditas", "pepperoni pizza", "Pozole"];

// Step 2: Update the HTML element with the ID "food" to display the favorite foods array
document.querySelector("#food").textContent = foodFavs.join(",");

// Step 3: Declare and instantiate a variable to hold another favorite food
const moreFoodFavs1 = "Chagalapolly water";

// Step 4: Add the variable holding another favorite food to the favorite food array


// Step 5: Update the HTML element with the ID "food" to display the modified array with line breaks
document.querySelector("#food").innerHTML = foodFavs.join(",");
foodFavs.push(moreFoodFavs1);
// Step 6: Remove the first element in the favorite foods array
const removedFirstFood = foodFavs.shift();

// Step 7: Update the HTML element with the ID "food" to display the modified array with the removed first element and line breaks
document.querySelector("#food").innerHTML += "<br>" + removedFirstFood + "," + foodFavs.join(",");

// Step 8: Remove the last element in the favorite foods array
const removedLastFood = foodFavs.pop();

document.querySelector("#food").innerHTML += "<br>"+ foodFavs+","+ removedLastFood;


// Step 9: Update the HTML element with the ID "food" to display the modified array with the removed last element and line breaks
document.querySelector("#food").innerHTML += "<br>"+ foodFavs.join(",");
