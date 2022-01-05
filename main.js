
let dieRolls = []
let dieTotal = document.querySelector("#total")


// **** Roll Button ****


let rollButtonClick = document.getElementById("rollButton")
// let diceNumber = document.getElementById("numOfDice")


rollButtonClick.addEventListener("click", function () {

    // **** Test ****
    // this.innerHTML="ahhh"
    // ********
    // document.getElementById("numOfDice")
    let diceNumber = document.getElementById("numOfDice").value
    console.log("The number of rolls is " + diceNumber)

    // })**** Dice Loop ****

 let sum = 0

     for (let i = 1; i <= diceNumber; i++) {

       dieRolls.push(Math.ceil(Math.random() * 6))

    }


// **** Total ****

    console.log(dieRolls)

    dieRolls.forEach(item => {
        sum = item + sum
    })

    dieTotal.innerHTML = sum

})
// work on the "Show all results" button

 

// const array = [1, 2, 3, 4];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// console.log(sum);