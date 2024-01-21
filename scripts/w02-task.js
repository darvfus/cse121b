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

const foodFavs = ["Tacos", "Tamales", "Picaditas", "pepperoni pizza", "Pozole"];

document.querySelector("#food").textContent = foodFavs.join(",");

const moreFoodFavs1 = "Chagalapolly water";



document.querySelector("#food").innerHTML = foodFavs.join(",");
foodFavs.push(moreFoodFavs1);

const removedFirstFood = foodFavs.shift();

document.querySelector("#food").innerHTML += "<br>" + removedFirstFood + "," + foodFavs.join(",");

const removedLastFood = foodFavs.pop();

document.querySelector("#food").innerHTML += "<br>"+ foodFavs+","+ removedLastFood;


document.querySelector("#food").innerHTML += "<br>"+ foodFavs.join(",");
