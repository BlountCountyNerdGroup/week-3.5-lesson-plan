var health = 10;
var money = 90;

function renderMoney() {
    document.getElementById("cash").innerHTML = "$" + money;
}
function renderHealth() {
    document.getElementById("health").innerHTML = health;
}

// Store
function buyLife() {
    var numLives = prompt("How many lives would you like to buy a life from the store?");
    var cost = numLives*10;
    var confirm = prompt("That will cost $" + cost + " dollars. Would you like to continue? (y/n)");
    if (confirm === "y") {
        money -= cost;
        renderMoney();
        health += parseInt(numLives);
        renderHealth();
    } else {
        alert("You suck.");
    }
}
function spinTheWheel() {
    var wager = prompt("How much money would you like to wager?");
    var wagerResult = parseInt(wager) * (Math.floor(Math.random()*2) - 1);
    if (wagerResult > 0) {
        alert("You won the wager! You made $" + wagerResult);
    } else {
        alert("You lost the wager. You lost $" + Math.abs(wagerResult));
    }
    money += wagerResult;
}

// Render first time through
renderMoney();
renderHealth();

// Timer to beat
window.setInterval(() => {
    health -= 1; 
    renderHealth(); 
}, 3000);

// Check for win / lose
window.setInterval(() => {
    // if (health <= 0) {
    //     alert("You lose :(")
    // }
}, 10);
window.setTimeout(() => {
    alert("You win!");
}, 20000)