// Global variables
let secretNumber = generateRandomNumber();
var checkButton = document.getElementById("checkButton");


// 4. Function to generate a random number between 1 and 10
function generateRandomNumber() {
  return Math.floor(Math.random() * 10)+1;
}

// Function to check the user's guess
function checkGuess() {
  let userGuess = parseInt(document.getElementById("userGuess").value, 10);
  let resultElement = document.getElementById("result");

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    alert("Please enter a valid number between 1 and 10.");
    return;
  }

  if (userGuess === secretNumber) {
    // If the answer is correct
    showImageAndPlaySound("picture2.jpeg", "music2.mp3");
    //resultElement.innerHTML = "Congratulations! You guessed the correct number!";
    // Generate a new random number for the next round
    secretNumber = generateRandomNumber();
  } else {
    // If the answer is wrong
    showImageAndPlaySound("picture1.jpeg", "music1.mp3");
    //resultElement.innerHTML = "Sorry, try again!";
  }

  // Clear the input field for the next guess
  document.getElementById("userGuess").value = "";
}


// Function to show image and play sound
function showImageAndPlaySound(imageSource, soundSource) {
  let imageElement = document.createElement("img");
  imageElement.src = imageSource;

  let soundElement = document.createElement("audio");
  soundElement.src = soundSource;
  soundElement.autoplay = true;

  let resultContainer = document.getElementById("result");
  resultContainer.innerHTML = "";
  resultContainer.appendChild(imageElement);
  resultContainer.appendChild(soundElement);
}


function handleKeyPress(event) {
  // Check if the pressed key is Enter (key code 13)
  if (event.keyCode === 13) {
    // Trigger the button click
    checkGuess();
  }
}