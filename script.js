const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordEl1 = document.querySelector("#password-1")
let passwordEl2 = document.querySelector("#password-2")

function generatePassword(){
    passwordEl1.textContent = ''
    passwordEl2.textContent = ''

    for(let i=0;i<12;i++){
        passwordEl1.textContent += characters[Math.floor(Math.random()*characters.length)] 
    }
    for(let i=0;i<12;i++){
        passwordEl2.textContent += characters[Math.floor(Math.random()*characters.length)] 
    }


}
function copyPass1(){
    
    const clipBoardContent = document.getElementById("password-1").textContent
    navigator.clipboard.writeText(clipBoardContent)
    // alert("password copied to clipboard!")
      
}
function copyPass2(){
    
    const clipBoardContent = document.getElementById("password-2").textContent
    navigator.clipboard.writeText(clipBoardContent)
    // alert("password copied to clipboard!")
      
}