const readline = require('node:readline');

/**
 * 
*/

const experienceGainedLog = [
    {name:'maria', exp: 4}, 
    {name:'manuel', exp: 9}, 
    {name:'carlos', exp: 7},  
    {name:'jose', exp: 8}, 
    {name:'ana', exp: 5}, 
    {name:'juan', exp: 2}, 
    {name:'luis', exp: 6}, 
    {name:'santi', exp: 1}, 
    {name:'pedro', exp: 3},
    {name:'jose', exp: 8}, 
    {name:'ana', exp: 5}, 
    {name:'juan', exp: 2}, 
    {name:'luis', exp: 6}, 
    {name:'santi', exp: 1}, 
    {name:'pedro', exp: 3},
    {name:'jose', exp: 8}, 
    {name:'ana', exp: 5}, 
    {name:'juan', exp: 2}, 
    {name:'luis', exp: 6}, 
    {name:'santi', exp: 1}, 
    {name:'pedro', exp: 3},
];

function checkUserExists(userName, experienceGainedLog) {
    // first check if the user exists in the experienceGainedLog
}

function getTotalExpForUser(userName, experienceGainedLog) {
    const userExists = checkUserExists(userName, experienceGainedLog)
    if (userExists) {
        // do somethign to get the total amount of exp for the user if found
    }
    return "Error: User not found"
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question(`What's your name?`, name => {
    getTotalExpForUser(name, experienceGainedLog)
    rl.close();
  });