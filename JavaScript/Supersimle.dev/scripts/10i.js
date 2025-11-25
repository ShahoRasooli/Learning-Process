let calculation = localStorage.getItem("calculation") || "";

function updateCalculation(value) {
  calculation += value;
  console.log(calculation);
  localStorage.setItem("calculation", calculation);
}

// Optional: you can also create a function in order
// to reuse this code.
function saveCalculation() {
  localStorage.setItem("calculation", calculation);
}

function shownCalculation(e) {
  document.querySelector(".js-calculation").innerHTML = `${calculation}`;
}
