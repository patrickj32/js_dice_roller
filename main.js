
let dieRolls = []





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


    

     for (let i = 1; i <= diceNumber; i++) {

         dieRolls.push(Math.ceil(Math.random() * 6))
    }
console.log(dieRolls)


// **** Total ****




})
// Sum all your dice rolls and display the result in the Total area on the page using innerHTML


 

