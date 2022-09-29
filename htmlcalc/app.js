const addition = document.getElementById("addition");

addition.style.paddingBottom = "10px";

addition.addEventListener("submit", function (event) {
  event.preventDefault();
  const numOne = addition.firstNumber.value;
  const numTwo = addition.secondNumber.value;
  const answerAdd = parseInt(numOne) + parseInt(numTwo);

  addition.firstNumber.value = "";
  addition.secondNumber.value = "";

  const h4 = document.createElement("h4");
  h4.style.color = "green";
  h4.textContent = answerAdd;
  document.getElementsByClassName("answers")[0].append(h4);
});

const subtract = document.subtract;
subtract.style.paddingBottom = "10px";

subtract.addEventListener("submit", function (event) {
  event.preventDefault();

  const numThree = subtract.thirdNumber.value;
  const numFour = subtract.fourthNumber.value;
  const answer = numThree - numFour;

  subtract.thirdNumber.value = "";
  subtract.fourthNumber.value = "";

  const h4 = document.createElement("h4");
  h4.style.color = "blue";
  h4.textContent = answer;

  document.getElementsByClassName("answers")[0].append(h4);
});

const multiply = document.multiply;
multiply.style.paddingBottom = "10px";

multiply.addEventListener("submit", function (event) {
  event.preventDefault();

  const numFive = multiply.fifthNumber.value;
  const numSix = multiply.sixthNumber.value;
  const answer = numFive * numSix;

  multiply.fifthNumber.value = "";
  multiply.sixthNumber.value = "";

  const h4 = document.createElement("h4");

  h4.style.color = "red";
  h4.textContent = answer;

  document.getElementsByClassName("answers")[0].append(h4);
});
