let display = document.getElementById("display");
let button1 = document.getElementById("button-1");
let button2 = document.getElementById("button-2");
let button3 = document.getElementById("button-3");
let button4 = document.getElementById("button-4");
let button5 = document.getElementById("button-5");
let button6 = document.getElementById("button-6");
let button7 = document.getElementById("button-7");
let button8 = document.getElementById("button-8");
let button9 = document.getElementById("button-9");
let button0 = document.getElementById("button-0");
let buttonPlus = document.getElementById("button-plus");
let buttonMinus = document.getElementById("button-minus");
let buttonEqual = document.getElementById("button-equal");
let buttonC = document.getElementById("button-c");

let results = {
  leftNumber: null,
  operator: null,
  rightNumber: null,
  result: null,
};

function numberAsignator(number) {
  if (!results.operator) {
    if (results.leftNumber === null) {
      results.leftNumber = number;
    } else {
      results.leftNumber = results.leftNumber + number;
    }
    //results.leftNumber = !results.leftNumber ? "8" : results.leftNumber + "8";
    display.textContent = results.leftNumber;
  } else if (results.operator) {
    results.rightNumber = !results.rightNumber
      ? number
      : results.rightNumber + number;
    display.textContent =
      results.leftNumber + " " + results.operator + " " + results.rightNumber;
  }
}

// left     operator  right      result
// 24       +         11 =       35
button1.addEventListener("click", function () {
  numberAsignator("1");
});

button2.addEventListener("click", () => {
  numberAsignator("2");
});

button3.addEventListener("click", () => {
  numberAsignator("3");
});

button4.addEventListener("click", () => {
  numberAsignator("4");
});

button5.addEventListener("click", () => {
  numberAsignator("5");
});

button6.addEventListener("click", () => {
  numberAsignator("6");
});

button7.addEventListener("click", () => {
  numberAsignator("7");
});

button8.addEventListener("click", () => {
  numberAsignator("8");
});

button9.addEventListener("click", () => {
  numberAsignator("9");
});

button0.addEventListener("click", () => {
  numberAsignator("0");
});

buttonPlus.addEventListener("click", () => {
  if (!results.leftNumber) {
    alert("Falta algún número");
  } else if (!results.rightNumber) {
    results.operator = "+";
    display.textContent = results.leftNumber + " " + results.operator;
  } else {
    results.operator = "+";
    display.textContent =
      results.leftNumber + " " + results.operator + " " + results.rightNumber;
    // "11" + " " + "+" + " " + "33"
    // "11 + 33"
  }
});

buttonMinus.addEventListener("click", () => {
  if (!results.leftNumber) {
    alert("Falta algun numero");
  } else if (!results.rightNumber) {
    results.operator = "-";
    display.textContent = results.leftNumber + " " + results.operator;
  } else {
    results.operator = "-";
    display.textContent =
      results.leftNumber + " " + results.operator + " " + results.rightNumber;
  }
});

buttonEqual.addEventListener("click", () => {
  if (!results.operator) {
    alert("Falta el operador");
  } else if (!results.rightNumber || !results.leftNumber) {
    alert("Falta algun numero");
  } else {
    if (results.operator === "+") {
      results.result = +results.leftNumber + +results.rightNumber;
      display.textContent = results.result;
    } else if (results.operator === "-") {
      results.result = +results.leftNumber - +results.rightNumber;
      display.textContent = results.result;
    }
  }
});

buttonC.addEventListener("click", () => {
  results = {
    leftNumber: null,
    operator: null,
    rightNumber: null,
    result: null,
  };
  display.textContent = "0";
});
