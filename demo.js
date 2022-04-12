const productNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

//  console.dir(productNameInputElement);

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingChars(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  const remaininCharacters = maxAllowedChars - enteredTextLength;

  remainingCharsElement.textContent = remaininCharacters;
}

productNameInputElement.addEventListener("input", updateRemainingChars);


const carlos = document.getElementById("remaining-chars");

console.log(carlos)