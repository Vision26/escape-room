const readlineSync = require("readline-sync");
const userName = readlineSync.question("What is your name?");
    console.log("Hi " + userName + "!");
const entrance = readlineSync.question('Shall we start? [Y] or [N] ');
    if (entrance == "y"){
     console.log("Awesome! " +userName+ " Let's start!")
    } 
    else if (entrance == "n"){
     console.log('Maybe some other time')
            process.exit()
    }
playerPlaying = true;
while (playerPlaying == true) {
isplayerOptions = true
 while(isplayerOptions == true){
        //while the player  is still active 
    {
const isPlayerOption1 = readlineSync.question("Are you sure you wanted to ... \n [1] Open the door? \n [2] Put hand in the hole? \n [3] Find key? \n",{limit:["1","2","3"]});
            switch(isPlayerOption1){ 
                case '2':
                    console.log ('YOU DIE!!!')
                    isplayerOptions = true;
                    break;
                case '3':
                    console.log ('You found the key under the rug!');
                    // isplayerOptions = false;
                    // break;
                case '1':
                    console.log ('You do not have key 😫, try again');
                    isplayerOptions = true;
                    break;
            }
        }
    }}







