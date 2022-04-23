//First example: Sum Numbers

const calculateSumButtonElement = document.querySelector("#calculator button");

function calculateSum() {
  const userNumberElement = document.getElementById("user-number");
  const enteredNumber = userNumberElement.value;

  let sumUpToNumber = 0;

  for (let x = 0; x <= enteredNumber; x++) {
    sumUpToNumber = sumUpToNumber + x;
  }

  const outputResultElement = document.getElementById("calculated-sum");

  outputResultElement.textContent = sumUpToNumber;
  outputResultElement.style.display = "block";
}
calculateSumButtonElement.addEventListener("click", calculateSum);

// Highlights Links Exercise

const hightlightLinksButtonElement = document.querySelector(
  "#highlight-links button"
);

function highlightLinks() {
  const anchorElements = document.querySelectorAll("#highlight-links a");

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
}

hightlightLinksButtonElement.addEventListener("click", highlightLinks);

// Display User Data

const dummyUserData = {
  firstName: "Carlos",
  lastName: "Murillo",
  age: 15,
};

const displayUserDataButtonElement =
  document.querySelector("#user-data button");

function displayUserData() {
  const outPutDataElement = document.getElementById("output-user-data");

  outPutDataElement.innerHTML = "";

  for (const key in dummyUserData) {
    const newUserDataListItemElement = document.createElement("li");
    const outputText = key.toUpperCase() + ":" + dummyUserData[key];
    newUserDataListItemElement.textContent = outputText;

    outPutDataElement.append(newUserDataListItemElement);
  }
}

displayUserDataButtonElement.addEventListener("click", displayUserData);

// Statistics / Roll the Dice *NO LE ENTENDÍ*

const rollDiceButtonElement = document.querySelector("#statistics button");

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function deriveNumberOfDiceRolls() {
  const targetNumberInputElement =
    document.getElementById("user-target-number");
  const diceRollsListElement = document.getElementById("dice-rolls");

  const enteredNumber = targetNumberInputElement.value;
  diceRollsListElement.innerHTML = "";

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;

  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();
    // if(rolledNumber == enteredNumber) {
    //   hasRolledTargetNumber = true
    // }
    numberOfRolls++;
    const newRollListItemElement = document.createElement("li");
    const outputText = "Roll " + numberOfRolls + ": " + rolledNumber;
    newRollListItemElement.textContent = outputText;
    diceRollsListElement.append(newRollListItemElement);
    hasRolledTargetNumber = rolledNumber == enteredNumber;
  }
  const outputTotalRollsElement = document.getElementById("output-total-rolls");
  const outputTargetNumber = document.getElementById("output-target-number");

  outputTargetNumber.textContent = enteredNumber;
  outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceButtonElement.addEventListener("click", deriveNumberOfDiceRolls);
