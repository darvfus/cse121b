function add(number1, number2) {
    let sum = document.querySelector("#sum");
    sum.value = number1 + number2;
  }
  
  function addNumbers() {
    let number1 = parseInt(document.querySelector("#addend1").value);
    let number2 = parseInt(document.querySelector("#addend2").value);
    add(number1, number2);
  }
  
  let addBtn = document.querySelector("#addNumbers");
  addBtn.addEventListener("click", function () {
    addNumbers();
  });
  
  /*
  function expressions
  */
  let subtract = function (number1, number2) {
    let difference = document.querySelector("#difference");
    difference.value = number1 - number2;
  };
  
  let subtractNumbers = function () {
    let minuend = parseInt(document.querySelector("#minuend").value);
    let subtrahend = parseInt(document.querySelector("#subtrahend").value);
    subtract(minuend, subtrahend);
  };
  
  let subBtn = document.querySelector("#subtractNumbers");
  subBtn.addEventListener("click", function () {
    subtractNumbers();
  });
  
  /*
  arrow functions
  */
  var multiply = (number1, number2) => {
    let product = document.querySelector("#product");
    product.value = number1 * number2;
  };
  var multiplyNumbers = () => {
    let factor1 = parseInt(document.querySelector("#factor1").value);
    let factor2 = parseInt(document.querySelector("#factor2").value);
    multiply(factor1, factor2);
  };
  
  let multiBtn = document.querySelector("#multiplyNumbers");
  multiBtn.addEventListener("click", function () {
    multiplyNumbers();
  });
  
  /*
  arrow functions again
  */
  var divide = (number1, number2) => {
    let quotient = document.querySelector("#quotient");
    quotient.value = number1 / number2;
  };
  var divideNumbers = () => {
    let dividend = parseInt(document.querySelector("#dividend").value);
    let divisor = parseInt(document.querySelector("#divisor").value);
    divide(dividend, divisor);
  };
  
  let divideBtn = document.querySelector("#divideNumbers");
  divideBtn.addEventListener("click", function () {
    divideNumbers();
  });
  
  /* BUILT-IN METHODS */
  
  // Step 1: Declare and instantiate a variable of type Date to hold the current date
  
  // Step 2: Declare a variable to hold the current year
  
  // Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
  
  // Step 4: Assign the current year variable to an HTML form element with an ID of year
  
  let date = new Date();
  let currentYear = date.getFullYear();
  document.querySelector("#year").innerHTML = currentYear;
  
  /* ARRAY METHODS */
  
  // Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
  
  // Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
  
  // Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
  
  // Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
  
  // Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
  
  // Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
  
  // Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
  
  const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25,
  ];
  document.querySelector("#array").innerHTML = numbers;
  
  // filter array
  let filteredOdds = numbers.filter((num) => num % 2 === 1);
  document.querySelector("#odds").innerHTML = filteredOdds;
  
  let filteredEven = numbers.filter((num) => num % 2 === 0);
  document.querySelector("#evens").innerHTML = filteredEven;
  
  function sumofArray(sum, num) {
    return sum + num;
  }
  document.querySelector("#sumOfArray").innerHTML = numbers.reduce(sumofArray);
  
  let newArr2 = numbers.map(num => num * 2);
  document.querySelector("#multiplied").innerHTML = newArr2;
  
  let filterMulti = newArr2.reduce(sumofArray);
  
  document.querySelector("#sumOfMultiplied").innerHTML = filterMulti;