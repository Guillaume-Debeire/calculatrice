function add(a, b) {
  return parseInt(a) + parseInt(b);
}

function sub(a, b) {
  return parseInt(a) - parseInt(b);
}

function div(a, b) {
  return parseInt(a) / parseInt(b);
}

function mul(a, b) {
  return parseInt(a) * parseInt(b);
}

let firstAdd = document.getElementById("first-add");
let secondAdd = document.getElementById("second-add");

let firstSub = document.getElementById("first-sub");
let secondSub = document.getElementById("second-sub");

let firstDiv = document.getElementById("first-div");
let secondDiv = document.getElementById("second-div");

let firstMul = document.getElementById("first-mul");
let secondMul = document.getElementById("second-mul");

let addButton = document.getElementById("add-button");
let subButton = document.getElementById("sub-button");
let divButton = document.getElementById("div-button");
let mulButton = document.getElementById("mul-button");

let resultAdd = document.getElementById("result-add");
let resultSub = document.getElementById("result-sub");
let resultDiv = document.getElementById("result-div");
let resultMul = document.getElementById("result-mul");

function displayAddVal(value) {
  resultAdd.innerHTML = value;
}
function displaySubVal(value) {
  resultSub.innerHTML = value;
}
function displayDivVal(value) {
  resultDiv.innerHTML = value;
}
function displayMulVal(value) {
  resultMul.innerHTML = value;
}

addButton.addEventListener("click", () => {
  let number = add(firstAdd.value, secondAdd.value);
  displayAddVal(number);
});

subButton.addEventListener("click", () => {
  let number = sub(firstSub.value, secondSub.value);
  displaySubVal(number);
});

divButton.addEventListener("click", () => {
  let number = div(firstDiv.value, secondDiv.value);
  displayDivVal(number);
});

mulButton.addEventListener("click", () => {
  let number = mul(firstMul.value, secondMul.value);
  displayMulVal(number);
});

if (add(1, 2) === 3) {
  console.log("ADD OK");
} else {
  console.log("ADD NOT OK");
}
if (sub(1, 2) === -1) {
  console.log("SUB OK");
} else {
  console.log("SUB NOT OK");
}
if (div(1, 2) === 0.5) {
  console.log("DIV OK");
} else {
  console.log("DIV NOT OK");
}
if (mul(1, 2) === 2) {
  console.log("MUL OK");
} else {
  console.log("MUL NOT OK");
}
