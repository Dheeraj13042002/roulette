// const Chalk = require("chalk");
// import {Chalk} from 'chalk';
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getReturnAmount() {
  rl.question("What is your amount of SOL you want to stake ? ",function (amt) {
      rl.question("Where is ratio of stake ? ", function (ratio) {
    
        let profit = ratio.split(":")[1];
        profit = profit.trim();

        console.log(`You need to pay ${amt} to move forward`);
        console.log(
         (`You will get ${amt * profit} if guessing the number correctly!`)
        );

        rl.question("Guess a random number from 1 to 5 :", function (random) {

          let original = randomNumber(1,5);
          if(original == random){
            console.log('Your guess is absolutely correct');
            console.log(`Amount you win is ${amt*profit}`);
          }
          else{
             console.log('Better luck next time');
          }

          rl.close();
        });
      });
    });
}

function totalAmtToBePaid() {}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

getReturnAmount();

