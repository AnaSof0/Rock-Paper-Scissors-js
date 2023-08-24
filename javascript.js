function getComputerChoice(){
    const choices=['rock','paper','scissors'];
    return(choices[(Math.floor(Math.random() * choices.length))]);
}

/*
function to play a round, takes in the player's selection and the random 
computer's choice and outputs who wins
*/
function playRound(playerSelection,computerSelection){
    let s;
    let player=playerSelection.toLowerCase();

    if(player==computerSelection){
        s="Tie!"
    }
    else if ((player=="scissors" && computerSelection=="paper")||
    (player=="rock" && computerSelection=="scissors")||
    (player =="paper" && computerSelection=="rock")){
        s = "You win!";
    }
    else{
        s = "You lose!";
    }
    return s;
}
function someoneWon(wins,looses){
    if(wins==3 || looses==3){
        return true;
    }
    return false;
};

let playerSelection='';

window.addEventListener('keydown',function(e){
    console.log(e);
    if (e.key === 'r' || e.key === 'p' || e.key === 's') { // Check for valid keys 'r', 'p', and 's'
        console.log('move?');
        if (e.key=='r'){
            playerSelection='rock';
        }
        else if(e.ke=='p'){
            playerSelection='paper';
        }
        else if(e.key=='s'){
            playerSelection='scissors';
        }


        const Computer = getComputerChoice();
        const result=playRound(playerSelection,Computer);
        console.log(result);
    }
    else{
        return;
    }
});

/*function game5(){
    let wins=0;
    let looses=0;
    while(!someoneWon(wins,looses)){
        let p = prompt("What's your move?");
        let c= getComputerChoice();
        let result = playRound(p,c);
        if (result == "You win!"){
            console.log("Yay");
            wins++;
        }
        else if(result=="You lose!"){
            console.log("Nay");
            looses++;
        }
        else{
            console.log("May?");
        }
    }
}*/
