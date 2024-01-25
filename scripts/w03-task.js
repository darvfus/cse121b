function add(number1, number2) {
  return parseFloat(number1) + parseFloat(number2);
}

function addNumbers() {
  let addend1 = document.querySelector("#add1").value;
  let addend2 = document.querySelector("#add2").value;
  let getSum = document.querySelector("#sum");

  const sumOfTwo = add(addend1, addend2);

  getSum.value = sumOfTwo;
}

const addNumBtn = document.querySelector("#addNumbers");
addNumBtn.addEventListener("click", addNumbers);

const subtractFunction = function subtract(number1, number2) {
  return parseFloat(number1) - parseFloat(number2);
}

function subtractNumbers() {
  let minuend = document.querySelector("#subtract1").value;
  let subtrahend = document.querySelector("#subtract2").value;
  let getDiff = document.querySelector("#difference");

  const diffOfTwo = subtractFunction(minuend, subtrahend);

  getDiff.value = diffOfTwo;
}

const subNumBtn = document.querySelector("#subtractNumbers");
subNumBtn.addEventListener("click", subtractNumbers);


// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
const multiply = (number1, number2) => {
  return parseFloat(number1) * parseFloat(number2);
}

const multiplyNumbers = () => {
  let factor1 = document.querySelector("#factor1").value;
  let factor2 = document.querySelector("#factor2").value;
  let getProduct = document.querySelector("#product");

  const productOfTwo = multiply(factor1, factor2);

  getProduct.value = productOfTwo;
}

const multNumBtn = document.querySelector("#multiplyNumbers");
multNumBtn.addEventListener("click", multiplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
const divide = (number1, number2) => {
  return parseFloat(number1) / parseFloat(number2);
}

const divideNumbers = () => {
  let dividend = document.querySelector("#dividend").value;
  let divisor = document.querySelector("#divisor").value;
  let getQuotient = document.querySelector("#quotient");

  const quotientOfTwo = divide(dividend, divisor);

  getQuotient.value = quotientOfTwo;
}

const quotientNumBtn = document.querySelector("#divideNumbers");
quotientNumBtn.addEventListener("click", divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const currentDate = new Date();

// Step 2: Declare a variable to hold the current year
let currentYear = null;

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
currentYear = currentDate.getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year
const displayCurrentYear = document.querySelector("#year");

displayCurrentYear.innerHTML = currentYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const array_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
// Step 2: Assi[gn the value of the array variable to the HTML element with an ID of "array"
document.getElementById("array").innerHTML = array_1;
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
document.getElementById("odds").innerHTML = array_1.filter(oddNumbers);

function oddNumbers(number) {
    return number % 2 != 0;
}
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
document.getElementById("evens").innerHTML = array_1.filter(evenNumbers);

function evenNumbers(number) {
    return number % 2 === 0;
}
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
document.getElementById("sumOfArray").innerHTML = array_1.reduce(sumArray);

function sumArray(total, num) {
    return total + num;
}

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
let new_array = document.getElementById("multiplied").innerHTML = array_1.map(mapArray);

function mapArray(mapNumber) {
    return mapNumber * 2;
}
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
document.getElementById("sumOfMultiplied").innerHTML = new_array.reduce(newSumArray);

function newSumArray(newTotal, newNum) {
    return newTotal + newNum;
}

// Selection Structure
const getTotalBtn = document.querySelector("#getTotal");
getTotalBtn.addEventListener("click", calculateTotal);

function calculateTotal() {
  // Step 1: Get the subtotal value
  let subtotal = parseFloat(document.querySelector("#subtotal").value);

  // Step 2: Check if the user is a club member
  let isClubMember = document.querySelector("#member").checked;

  // Step 3: Calculate the total based on whether the user is a club member
  let totalDue = isClubMember ? subtotal * 0.9 : subtotal;

  // Step 4: Display the total due
  document.querySelector("#total").textContent = `$ ${totalDue.toFixed(2)}`;
}
