var readlineSync = require("readline-sync")
var name = readlineSync.question("What is your name?")
console.log("Hey " + name + " today you will decide you live or die. Choose your fate...")
 options = ["Put hand in hole... ", "Find the key, or... ", "Open the door... "]
//Booleans for value conditions
let key = false
let isAlive = true
//while loop to run player through options. Need to use a boolean to escape the loop.
//use the second condition to stop the pyaler from opening the door without unliking it first

while(isAlive){
    var index = readlineSync.keyInSelect(options, "What is your choice?")
    if(index === 1){
        key= true
        console.log("you found the key")
    }
    if(index === 2){
        if(key === true){
        console.log("You opened the door")
           isAlive = false
    } else
        console.log("You have to find the key!")
    }
    if (index === 0){
        console.log("You died!")
        isAlive = false
     } 
    }
    

