// Initialize array to hold player names
var players = [];

// Get elements from the DOM
var playerList = document.getElementById("players-list");
var addPlayerButton = document.getElementById("add-player");
var generateCombinationsButton = document.getElementById("generate-combinations");
var resultContainer = document.getElementById("combinations-list");
var clearButton = document.getElementById("clear");
var playerInput = document.getElementById("player-input");

// Add player to players array and playerList
function addPlayer() {
  var playerName = playerInput.value.trim();

  if (playerName !== "") {
    // Check for duplicates
    if (players.indexOf(playerName) === -1) {
      players.push(playerName);

      var li = document.createElement("li");
      li.textContent = playerName;
      playerList.appendChild(li);

      playerInput.value = "";
    } else {
      alert("Player already exists!");
    }
  }
}

// Generate all possible player combinations and display them
function generateCombinations() {
  // Clear previous results
  resultContainer.innerHTML = "";

  if (players.length < 2) {
    alert("You must add at least 2 players.");
    return [];
  }
   
  var combinations = [];
for (var i = 0; i < players.length - 1; i++) {
    for (var j = i + 1; j < players.length; j++) {
      var player1 = players[i];
      var player2 = players[j];

      combinations.push([player1, player2]);
    }
  }

  shuffle(combinations);

  for (var i = 0; i < combinations.length; i++) {
    var combination = combinations[i];
    var li = document.createElement("li");
    li.textContent = combination[0] + " vs " + combination[1];
    resultContainer.appendChild(li);
  }

  return combinations;
}

function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Clear all players and combinations
function clearAll() {
  players = [];
  playerList.innerHTML = "";
  resultContainer.innerHTML = "";
}

// Add event listeners to buttons
addPlayerButton.addEventListener("click", addPlayer);
generateCombinationsButton.addEventListener("click", generateCombinations);
clearButton.addEventListener("click", clearAll);