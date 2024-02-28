var container = document.getElementById('container');
var colors = ['gray', 'red', 'lightblue', 'green', 'orange', 'pink'];
var storedDices = [];
var Die = /** @class */ (function () {
    function Die() {
        this.value = null;
        this.div = document.createElement('div');
        this.div.classList.add('Dice');
        this.updateColor();
        this.roll();
        storedDices.push(this);
        container.appendChild(this.div);
        console.log(storedDices);
    }
    Die.prototype.updateColor = function () {
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        this.div.style.background = randomColor;
    };
    Die.prototype.roll = function () {
        // let diceText = document.createTextNode(randomVal(1, 7));
        // this.div.appendChild(diceText);}
        this.value = randomVal(1, 7);
        this.div.textContent = this.value;
        console.log(this.value);
        // this.div.textContent = randomVal(1,7);
        // console.log(diceText);
    };
    Die.prototype.reRoll = function () {
        storedDices.forEach(function (storedDices) { storedDices.roll(); });
    };
    return Die;
}());
var rollButton = document.getElementById('roll-button');
var dicebutton = document.getElementById('dice-button');
if (dicebutton === null) {
    alert('oops');
}
else
    dicebutton.addEventListener('click', function () {
        new Die();
    });
if (rollButton === null) {
    alert('oops i did it again..');
}
else
    rollButton.addEventListener('click', function () {
        storedDices.forEach(function (die) { die.roll(); });
    });
// function generatedice() {
//     let findDice = new Die();
// }
function rolldaDice() {
    storedDices.forEach(function (storedDices) { storedDices.roll(); });
    // for( i = 0 < storedDices.length; i++;) {
    //     let allRoll = storedDices[i];
    //     allRoll.roll();
    // }
}
function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
