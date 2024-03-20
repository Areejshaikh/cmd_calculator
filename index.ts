#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from  "chalk"


const user_output = await inquirer.prompt([
  { 
    message: "Enter your first Number",
    type: "number",
    name: "firstNumber",
  },
  {
    message: "Enter your second Number",
    type: "number",
    name: "secondNumber",
  },
  {
    message: "Seclect any one option",
    type: "list",
    name: "oprators",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);
if (user_output.oprators === "addition") {
  console.log(chalk.gray `your output is:${user_output.firstNumber + user_output.secondNumber}`);
} else if (user_output.oprators === "subtraction") {
  console.log(chalk.yellowBright `your output is:${user_output.firstNumber - user_output.secondNumber}`
  );
} else if (user_output.oprators === "multiplication") {
  console.log(chalk.yellowBright 
    `your output is:${user_output.firstNumber * user_output.secondNumber}`
  );
} else if (user_output.oprators === "division") {
  console.log(chalk.cyanBright
    `your output is:${user_output.firstNumber / user_output.secondNumber}`
  );
} else {
  console.log("Please Enter your valid number");
}

console.log("Code end");

