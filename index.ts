import inquirer from "inquirer";
import chalkAnimation from 'chalk-animation';
import chalk from 'chalk';
import gradient from 'gradient-string';


let Guess_Flag= true
while(Guess_Flag)
{

  console.clear();
  console.log(`  ${chalk.bgMagenta('\t\t>>> NUMBER GUESSING GAME <<<')} `);
  console.log(chalk.greenBright(`\n\t =============================== HOW TO PLAY =============================== \n\t`))
  console.log(chalk.cyanBright(`\t\tUser will provide a range to guess a number\n\t\tGame will determine number of attempts based on the following rules\n`))
  console.log(`  ${chalk.bgMagenta('\t\t\t -- RULES --\t')} `);
  console.log(`${chalk.bgGreen.yellow.bold('\t>>> Difference of Max Range - Min Range   |   Max No. Attempts  <<<\t')} `);
                 console.log(chalk.greenBright(`\t>>>            10 or below                |            3        <<<\n `))
                 console.log(chalk.greenBright(`\t>>>            50 or below                |            4        <<<\n `))
                 console.log(chalk.greenBright(`\t>>>           100 or below                |            5        <<<\n `))
                 console.log(chalk.greenBright(`\t>>>           500 or below                |            6        <<<\n `))
                 console.log(chalk.greenBright(`\t>>>          1000 or below                |            7        <<<\n `))
                 console.log(chalk.greenBright(`\t>>>          1000 or above                |            8        <<<\n `))
  
  
  
  
  const Range = await inquirer.prompt([
  
    {
        type: "number",
        name: "min",
        message: "Number Guessing Game - Enter Lower limit of Range [ MIN : max ] : "
    },
    {
        type: "number",
        name: "max",
        message: "Number Guessing Game - Enter Higher limit of Range [ min: MAX ] : "
    }

    
    ]);
   

    const rangeDifference = Math.abs(Range.max - Range.min);

    // Determine the maximum allowed attempts based on the range difference
    let maxAttempts = 0; // Default max attempts

    if (rangeDifference <= 10) {
      maxAttempts = 3;
    } else if (rangeDifference <= 50) {
      maxAttempts = 4;
    } else if (rangeDifference <= 100) {
      maxAttempts =5 ;
    } else if (rangeDifference <= 500) {
      maxAttempts = 6;
    }
    else if (rangeDifference <= 1000) {
        maxAttempts = 7;
    } 
    else if (rangeDifference > 1000 && rangeDifference<=10000 ) {
        maxAttempts = 8;
      } 
      else if (rangeDifference > 10000) {
        maxAttempts = 10;
      } 

 function generateRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    console.log(`\n${chalk.bgBlue.white.bold(`You have ${maxAttempts} attempts to guess a number between ${Range.min} to ${Range.max} `)} `);
let Comp_guess = generateRandomNumber(Range.min, Range.max);
console.log(`${Comp_guess}`);
let win = false; 
let score = 0.00;


for(let i=maxAttempts; i>0; i--)
{

    console.log(chalk.bgBlue.white.bold(`\t>>> ${i}  Attempts Remaining ..  <<<`));
    const Guess = await inquirer.prompt
    ([
        {
            type: "number",
            name: "User",
            message: "Enter a Number to Guess  : "
        }
    ]);


    console.log(`${Guess.User}`);
  
    if (Guess.User >Range.max || Guess.User < Range.min)
        {
            console.log(`${chalk.yellow.bold('\t>>> You didnt Enter the Number between Range  <<<\t')} `);
        }

    if (Guess.User>Comp_guess)
        {
            console.log(`${chalk.red.bold('\t>>> You have Guessed Higher number, Try Lower ...   <<<\t')} `);
        }
    else if (Guess.User<Comp_guess)
        {
            console.log(`${chalk.red.bold('\t>>> You have Guessed a lower number, Try Higher ...  <<<\t')} `);
        }
    else if (Guess.User == Comp_guess)
        {
            console.log(chalk.bgYellow.greenBright.bold(`\t>>> ✪ ✪ ✪ ✪ CONGRATULATIONS ✪ ✪ ✪ ✪ <<<\t\n\t you have guessed right number : ${Comp_guess} `));
            win = true;
            score = (i/maxAttempts)*100;
            break;
        }

}
if (win == true)
{
    console.log(chalk.bgGreenBright.greenBright.bold(`\n\t✨🌟✨🌟✨🌟✨🌟✨🌟✨🌟✨🌟✨🌟✨🌟✨🌟✨🌟✨🌟✨🌟✨🌟\n\n\t>>> ✪ ✨🌟✨🌟 ✸   you  have   scored   ${score} %  ✸ ✨🌟🌟✨\n\n\t✨🌟✨🌟✨🌟✨🌟✨✨🌟✨🌟✨🌟✨🌟✨🌟✨🌟🌟✨🌟✨🌟✨🌟\n`));

}
else if (win == false)
{
    console.log(chalk.bgRed.white.bold`\n\n\t you have failed to guess the number  ${Comp_guess}   \n`);
}


const { Guess_Loop } = await inquirer.prompt([
    {
      type: "confirm",
      name: "Guess_Loop",
      message: "Continue further?",
      default: true
    }
  ]);

  Guess_Flag = Guess_Loop;
 }