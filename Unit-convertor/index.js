/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


let lengthPara = document.getElementById("length")
let volumePara = document.getElementById("volume")
let massPara = document.getElementById("mass")

document.getElementById("convert").addEventListener("click", function(){
  convertLength()
  convertVolume()
  convertMass()
} )


function convertLength (){
    let input = Number(document.getElementById("input").value)
    const  feet = (input * 3.281 ).toFixed(2)
    const  meter = (input / 3.281).toFixed(2)
      lengthPara.innerHTML = ` <p>  ${input} meter = ${feet} feet | ${input} feet = ${meter} meters </p> `
}
function convertVolume (){
    let input = Number(document.getElementById("input").value)
    const gallon = (input / 0.264 ).toFixed(2)
    const liter = (input * 0.264).toFixed(2)
   // console.log(` ${input} meter = ${feet} feet | ${input} feet = ${meter} meters.`)
      volumePara.innerHTML = ` <p>  ${input} liter = ${gallon} gallons | ${input} gallons = ${liter} liters </p> `
}
function convertMass (){
    let input = Number(document.getElementById("input").value)
    const pounds = (input * 2.204 ).toFixed(2)
    const kilos = (input / 2.204).toFixed(2)
   // console.log(` ${input} meter = ${feet} feet | ${input} feet = ${meter} meters.`)
      massPara.innerHTML = ` <p>  ${input} kilos = ${pounds} pounds | ${input} pounds = ${kilos} kilos </p> `
}


// input meter = ${feet} feet "|" input feet = ${meters} meters