
let dieRolls = []
let dieTotal = document.querySelector("#total")
let showAllRolesButtonClick = document.querySelector("#allRollsButton")
let showAllRolesButtonTotal = document.querySelector("#allRollsTotal")

// **** Roll Button ****


let rollButtonClick = document.getElementById("rollButton")
let diceNumber = document.getElementById("numOfDice")


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

// ****** "Show All Rolls button" ******

showAllRolesButtonClick.addEventListener("click", function() {
 
    
// *** all roles loop ***
    // for (var i = 0; i < dieRolls; i++) {

    // }
    
     // *** Testing ****




// Show All Roles list
    let allRolesList = document.querySelector("#showAllRolesList")

    dieRolls.forEach(function(i){
        let li = document.createElement('li')
        li.innerText = i
        // allRolesList.innerHTML = li
        allRolesList.append(li)
        // console.log(allRolesList.innerHTML = li)    

    })

console.log("All roles have been clicked")

})

//     Write a new loop: Loop over the dieRolls  array, creating a new List Item for each number and adding that List Item to the
// innerHTML  of the "All Rolls" element. 

// This LI should show the value of the roll. (4 points-- >

 

// Notes

// the rolls needs to start over each time

// The array needs to be reset for New dice roll

// referenece the DOM review 