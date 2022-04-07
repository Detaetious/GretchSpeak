const fs = require('fs')

let array = fs.readFileSync('words.dat').toString().split('\n')
let finalMsg = []
let arrLength = array.length
console.log("js loaded")

function randWords(){
    let rand = Math.floor(Math.random()*arrLength)
    finalMsg += " "+array[rand]
}

for(let i=0; i<arrLength; i++){
    randWords()
    if(i >= arrLength-1){
        console.log(finalMsg)
    }
}