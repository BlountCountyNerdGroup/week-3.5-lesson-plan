var health = 10;
var money = 100;

function randomNum(min, max) {
    return Math.random() * (max - min) + min;
}

// Challenge: write a function that renders a random random number using the onclick="{function()}" HTML attribute
// to change the html you will need to use JavaScript's getElementById("{id}") and .innerText = "{some text}"
// Remeber to search google if you have any problems and then ask if you still can't find the answer

function renderMoney() {
    document.getElementById("cash").innerHTML = "$" + money;
}
function renderHealth() {
    document.getElementById("health").innerHTML = health;
}

// Render first time through
renderMoney();
renderHealth();