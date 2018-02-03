var health = 2;
var money = 100;

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Challenge: write a function that renders a random random number using the onclick="{function()}" HTML attribute
// to change the html you will need to use JavaScript's document.getElementById("{id}") and .innerText = "{some text}"
// Remeber to search google if you have any problems and then ask if you still can't find the answer

function renderRandNum() {
    document.getElementById("randNumDiv").innerText = randomNum(5, 10);
}

function renderMoney() {
    document.getElementById("cash").innerHTML = "$" + money;
}
function renderHealth() {
    document.getElementById("health").innerHTML = health;
}

// Render first time through
renderMoney();
renderHealth();


function getALife() {
    if (health == 0) {
        alert("You came back from the dead!");
        health += 1;
    }else if (health == 1) {
        alert("You are well again.");
        health += 1;
    }else if (health == 2) {
        alert("Sorry, you are already in good health");
    }
}