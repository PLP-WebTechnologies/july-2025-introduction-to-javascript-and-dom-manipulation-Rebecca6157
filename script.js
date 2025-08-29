// ---------------------------
// Part 1: Variables & Conditionals
// ---------------------------
let userName = "Student"; // variable declaration
let passingScore = 50;

document.getElementById("checkBtn").addEventListener("click", function() {
  let score = document.getElementById("scoreInput").value;

  if (score >= passingScore) {
    document.getElementById("result").textContent = userName + " passed 🎉!";
  } else {
    document.getElementById("result").textContent = userName + " failed ❌.";
  }
});

// ---------------------------
// Part 2: Functions
// ---------------------------
function squareNumber(num) {
  return num * num;
}

function greetUser(name) {
  return "Hello, " + name + "!";
}

// Function in action
console.log(greetUser(userName));

document.getElementById("squareBtn").addEventListener("click", function() {
  let number = document.getElementById("numInput").value;
  let result = squareNumber(number);
  document.getElementById("squareResult").textContent = "Square: " + result;
});

// ---------------------------
// Part 3: Loops
// ---------------------------
document.getElementById("generateBtn").addEventListener("click", function() {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear existing list

  // For loop example
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Number (for loop): " + i;
    list.appendChild(li);
  }

  // While loop example
  let j = 1;
  while (j <= 3) {
    let li = document.createElement("li");
    li.textContent = "Number (while loop): " + j;
    list.appendChild(li);
    j++;
  }
});

// ---------------------------
// Part 4: DOM Interactions
// ---------------------------
// 1. Change text content dynamically
document.getElementById("intro").textContent = "✨ JavaScript makes pages interactive!";

// 2. Style change using DOM
document.getElementById("main-title").style.color = "purple";

// 3. Event listener interaction already shown above (buttons trigger updates)
