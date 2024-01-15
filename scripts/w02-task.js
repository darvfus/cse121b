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

const foodFavs = ["Tacos", "Tamales", " Picaditas", " pepperoni pizza",
];

document.querySelector("#food").textContent = foodFavs;

const moreFoodFavs1 = "Chagalapolly water";

foodFavs.push(moreFoodFavs1);

document.querySelector("#food").textContent = foodFavs;

foodFavs.shift();

document.querySelector("#food").textContent = foodFavs;

foodFavs.pop();


document.querySelector("#food").textContent = foodFavs;