let container: any = document.getElementById('container');
let colors: string[] = ['gray', 'red', 'lightblue', 'green', 'orange', 'pink'];
let storedDices: Die[] = [];

interface Dice {

}


class Die {
    value: any;
    div: HTMLElement;
    
    constructor() {
        this.value = null;
        this.div = document.createElement('div');
        this.div.classList.add('Dice');
        this.updateColor();
        this.roll();
        storedDices.push(this);
        container.appendChild(this.div)
        console.log(storedDices);


    }

    updateColor() {
        let randomColor = colors[Math.floor(Math.random() * colors.length)]
        this.div.style.background = randomColor;
    }

    roll() {

        // let diceText = document.createTextNode(randomVal(1, 7));
        // this.div.appendChild(diceText);}

        this.value = randomVal(1,7);
        this.div.textContent = this.value;

        console.log(this.value);

        // this.div.textContent = randomVal(1,7);

        // console.log(diceText);

    }
    
    reRoll() {
        storedDices.forEach((storedDices) => { storedDices.roll(); })
    }



}


let rollButton = document.getElementById('roll-button');
let dicebutton = document.getElementById('dice-button');
if(dicebutton === null) {
    alert('oops');
} else
    dicebutton.addEventListener('click', (): void => {
    new Die();
})

if(rollButton === null){
   alert('oops i did it again..') 
} else
    rollButton.addEventListener('click', function () {
    storedDices.forEach((die) => { die.roll(); })
})

// function generatedice() {

//     let findDice = new Die();

// }

function rolldaDice(): void{


    storedDices.forEach((storedDices) => { storedDices.roll(); })
    // for( i = 0 < storedDices.length; i++;) {
    //     let allRoll = storedDices[i];
    //     allRoll.roll();
    // }

}






function randomVal(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
}