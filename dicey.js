class Die {
    constructor(value) {
        this.value = value;
    }

    roll() {
        let rolledDice = randomVal(1,7);
        this.value = rolledDice

        console.log(rolledDice)
    }
}


let roll1 = new Die(5)


roll1.roll();

function randomVal (min,max) {
    return Math.floor(Math.random() * (max-min)) + min;
}