/**
 * Update the function to pass an array of users and return the name of the level for the user with most level
*/

const users = [
    {name:'maria', level: 4}, 
    {name:'manuel', level: 9}, 
    {name:'carlos', level: 7}, 
    {name:'jose', level: 8}, 
    {name:'ana', level: 5}, 
    {name:'juan', level: 2}, 
    {name:'luis', level: 6}, 
    {name:'santi', level: 1}, 
    {name:'pedro', level: 3}, 
];

const levelNames = [
    {id: 1, name: 'Beginner'},
    {id: 2, name: 'Intermediate'},
    {id: 3, name: 'Advanced'},
    {id: 4, name: 'Expert'},
    {id: 5, name: 'Master'},
    {id: 6, name: 'Grand Master'},
    {id: 7, name: 'Legendary'},
    {id: 8, name: 'Mythic'},
    {id: 9, name: 'Legendary'},
];

function getUserWithMostLevel(users) {
    // do something to find the user with most level
}

function getBestLevelAchieved(users, levelNames) {
    const user = getUserWithMostLevel(users);

    for (let i = 0; i < levelNames.length; i++) {
        const level = levelNames[i];
        // Do something with level to return the one what matches the level of the user
    }
}

// Function call
getBestLevelAchieved(users, levelNames)