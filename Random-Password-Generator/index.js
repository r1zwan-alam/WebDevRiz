const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generate = document.getElementById("pass-gen")
let output1 = document.getElementById("output1")
let output2 = document.getElementById("output2")
let pass =""
let pass2 =""
let i =""
function generated(){
    pass = ""
    pass2 = ""
       for(let j = 0; j < 15 ; j++){
            i = Math.floor(Math.random() * characters.length)
             pass += characters[i]
           
  }
   for(let j = 0; j < 15 ; j++){
            i = Math.floor(Math.random() * characters.length)
             pass2 += characters[i]
           
  }
    output1.textContent = pass;
      output2.textContent = pass2;
   console.log(pass)
   console.log(pass2)
}
