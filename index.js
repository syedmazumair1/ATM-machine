#! /usr/bin/env node
import inquirer from "inquirer";
let my_balance = 60000;
let my_pin = 1234;
let pin_check = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin"
    }
]);
if (pin_check.pin === my_pin) {
    let opration = await inquirer.prompt([
        {
            name: "opration",
            type: "list",
            choices: ["Withdraw", "Balance"],
            message: "Select your opration"
        }
    ]);
    if (opration.opration === "Withdraw") {
        let amount = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your amount"
            }
        ]);
        if (amount.amount <= my_balance && amount.amount >= 500) {
            my_balance -= amount.amount;
            console.log(`Your remaining balance is ${my_balance}`);
        }
        else {
            console.log("You don't have sufficient balance");
        }
    }
    else if (opration.opration === "check balance") {
        console.log(`your balance is ${my_balance}`);
    }
}
else {
    console.log("Wrong pin");
}
