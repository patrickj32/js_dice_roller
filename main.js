
let dieRolls = []





// **** Roll Button ****


let rollButtonClick = document.getElementById("rollButton")
// let diceNumber = document.getElementById("numOfDice")


rollButtonClick.addEventListener("click", function(){

// **** Test ****
    // this.innerHTML="ahhh"
    // ********
    // document.getElementById("numOfDice")
    var diceNumber = document.getElementById("numOfDice").value
console.log("The number of rolls is " + diceNumber)

// })**** Dice Loop ****

        var count = 0;
        for (var j = 0; j < Math.floor(Math.random() * 6); j++) {
            count++;
        }
        console.log(count);



    
})





