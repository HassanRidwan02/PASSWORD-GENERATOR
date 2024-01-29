const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let resetBtn = document.getElementById("reset-btn")

let genBtn = document.getElementById("gen-btn")
let passWord1 = document.getElementById("password1")
let passWord2 = document.getElementById("password2")

genBtn.addEventListener("click", () =>{
    for (let i = 0; i < 13; i++){
        passWord1.textContent += characters[Math.floor(Math.random() * characters.length)]
        passWord2.textContent += characters[Math.floor(Math.random() * characters.length)]
    }   
})

resetBtn.addEventListener("click", () =>{
    passWord1.textContent = ""
    passWord2.textContent = ""
})

// function copyPass(){
//     passWord1.select()
//     document.execCommand("copy")
// }