
let dieRolls = []
let dieTotal = document.querySelector("#total")
let showAllRolesButtonClick = document.querySelector("#allRollsButton")
let showAllRolesButtonTotal = document.querySelector("#allRollsTotal")
let allRolesList = document.querySelector("#showAllRolesList")

// **** Roll Button ****


let rollButtonClick = document.getElementById("rollButton")
let diceNumber = document.getElementById("numOfDice")


rollButtonClick.addEventListener("click", function () {

    // document.getElementById("numOfDice")
    let diceNumber = document.getElementById("numOfDice").value
    console.log("The number of rolls is " + diceNumber)

    //  Dice Loop 

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

    dieRolls.forEach(function(i){
        let li = document.createElement('li')
        li.innerText = i
        // allRolesList.innerHTML = li
        allRolesList.append(li)
        // console.log(allRolesList.innerHTML = li)    

    })

    
})


let rollReset= document.getElementById("reset")

rollReset.addEventListener("click", function () {
    
    console.log("reset button clicked")

   diceNumber.value = 0
   dieTotal.innerHTML = 0
   dieRolls = [] 
   allRolesList.innerHTML= ""


})




 

// Notes

// the rolls needs to start over each time

// The array needs to be reset for New dice roll

// referenece the DOM review 