/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//we need the inner text of the input-box
//we need the inner text of all the p's 

//20 meters = 65.616 feet | 20 feet = 6.096 meters

const convertEl = document.getElementById("convert")
const inputEl = document.getElementById("input-box")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

//when convert is clicked console log what is in the input element

    
function convertValue() {
    let userInput = 0
    convertEl.addEventListener("click", function() {
      userInput = inputEl.value
      console.log(userInput)
      
      let metersTofeet = userInput * 3.281
      let feetTometers =  userInput / 3.281
    //use template strings and defined elements to display conversion statements
      lengthEl.textContent = `${userInput} meters = ${metersTofeet.toFixed(3)} feet | ${userInput} feet = ${feetTometers.toFixed(3)} meters`
      
      let litresToGallons = userInput * 0.264
      let gallonsToLitres = userInput / 0.264
      volumeEl.textContent = `${userInput} litres = ${litresToGallons.toFixed(3)} gallons | ${userInput} gallons = ${gallonsToLitres.toFixed(3)} litres`
      
      let kilosToPounds = userInput * 2.204
      let poundsToKilos = userInput / 2.204
      massEl.textContent = `${userInput} kilos = ${kilosToPounds.toFixed(3)} pounds | ${userInput} pounds = ${poundsToKilos.toFixed(3)} kilos`
    })
}

convertValue()

