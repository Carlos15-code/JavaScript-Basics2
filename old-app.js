// document.body.children[1].children[0].href = "https://google.com";

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("a"); // a { color: red;}
anchorElement.href = "https://udemy.com";

// Add a New Element
// 1. Create a new element
let newAnchorElement = document.createElement("a");
newAnchorElement.textContent = " Fuckboy Julio";
newAnchorElement.href = "https://netflix.com";
// 2. Get acces to the parent element
let firstP = document.querySelector("p");
// 3. Insert the new elemente inside it.

firstP.appendChild(newAnchorElement);   

// Remove
// 1. Select the Element
let h1Rm = document.querySelector('h1');
// 2. Remove it
// h1Rm.remove();
h1Rm.parentElement.removeChild(h1Rm); //for older browsers

// Move Elements

firstP.parentElement.append(firstP);

// innnerHTML

console.log(firstP.innerHTML);

firstP.innerHTML = "Hola soy julio el <strong>prototip</strong>"