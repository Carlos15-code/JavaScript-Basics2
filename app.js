// Click
let paragraphElement = document.querySelector("p");

function changeParagraphText(event2) {
  paragraphElement.textContent = "Clicked";
  console.log("Paragraph wow");
  console.log(event2);
}

paragraphElement.addEventListener("click", changeParagraphText);

// Input
let inputElement = document.querySelector("input");

function retrieveUserInput(event) {
  //   let enteredText = inputElement.value;
    let enteredText = event.target.value; 
//   let enteredText = event.data; => This is Different!
  console.log(enteredText);
//   console.log(event);
}

inputElement.addEventListener("input", retrieveUserInput);
