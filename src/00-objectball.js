function gameObject() {
    return {
        home: {
         teamName: 'Brooklyn Nets',
         colors: ['Black', 'White'],
         players: {
            'Alan Anderson': {
                "number": 0,
                "shoe": 16,
                "points": 22,
                "rebounds": 12,
                "assists": 12,
                "steals": 3,
                "blocks": 1,
                "slamDunks": 1
            },
            'Reggie Evans': {
                "number": 30,
                "shoe": 14,
                "points": 12,
                "rebounds": 12,
                "assists": 12,
                "steals": 12,
                "blocks": 12,
                "slamDunks": 7
            },
            'Brook Lopez': {
                "number": 11,
                "shoe": 17,
                "points": 17,
                "rebounds": 19,
                "assists": 10,
                "steals": 3,
                "blocks": 1,
                "slamDunks": 15
            },
            'Mason Plumlee': {
                "number": 1,
                "shoe": 19,
                "points": 26,
                "rebounds": 12,
                "assists": 6,
                "steals": 3,
                "blocks": 8,
                "slamDunks": 5
            },
            'Jason Terry': {
                "number": 31,
                "shoe": 15,
                "points": 19,
                "rebounds": 2,
                "assists": 2,
                "steals": 4,
                "blocks": 11,
                "slamDunks": 1
            }
        }
    },
    away: {
        teamName: 'Charlotte Hornets',
        colors: ['Turquoise', 'Purple'],
        players: {
            'Jeff Adrien': {
                "number": 4,
                "shoe": 18,
                "points": 10,
                "rebounds": 1,
                "assists": 1,
                "steals": 2,
                "blocks": 7,
                "slamDunks": 2
            },
            'Bismak Biyombo': {
                "number": 0,
                "shoe": 16,
                "points": 12,
                "rebounds": 4,
                "assists": 7,
                "steals": 7,
                "blocks": 15,
                "slamDunks": 10
            },
            'DeSagna Diop': {
                "number": 2,
                "shoe": 14,
                "points": 24,
                "rebounds": 12,
                "assists": 12,
                "steals": 4,
                "blocks": 5,
                "slamDunks": 5
            },
            'Ben Gordon': {
                "number": 8,
                "shoe": 15,
                "points": 33,
                "rebounds": 3,
                "assists": 2,
                "steals": 1,
                "blocks": 1,
                "slamDunks": 0
            },
            'Brendan Haywood': {
                "number": 33,
                "shoe": 15,
                "points": 6,
                "rebounds": 12,
                "assists": 12,
                "steals": 22,
                "blocks": 5,
                "slamDunks": 12 
                }
             }
        }
    }
}

//gameObject Variables
const game = gameObject();
// Build a function, numPointsScored that takes in an argument of a player's name 
// and returns the number of points scored for that player.

function numPointsScored(playerName) {
    for (let teamKey in game) {
        if (game[teamKey].players.hasOwnProperty(playerName)) {
            return game[teamKey].players[playerName].points;
        }
    }
    return "Player not found";
}

//Build a function, shoeSize, that takes in an argument of a player's name 
//and returns the shoe size for that player.
function shoeSize(playerName) {
    for (const teamKey in game) {
        if (game[teamKey].players[playerName] !== undefined) {
            return game[teamKey].players[playerName].shoe;
        }
    }
    return "Player not found";
}

//Build a function, teamColors, that takes in an argument of the team name 
//and returns an array of that teams colors.
function teamColors(team) {
    for (const teamKey in game) {
        if (game[teamKey].teamName === team) {
            return game[teamKey].colors;
        }
    }
}

//Build a function, teamNames, that operates on the game object 
//to return an array of the team names.

function teamNames() {
    let teams = []
    for (const teamKey in game) {
        if (game[teamKey].teamName !== undefined)
        teams.push(game[teamKey].teamName);
    }
    return teams;
}


//Build a function, playerNumbers, that takes in an argument of a team name 
//and returns an array of the jersey numbers for that team.
function playerNumbers(teamName) {
    let jerseys = [];
    for (const teamKey in game) {
        if (game[teamKey].teamName === teamName);
            for (const playerKey in game[teamKey].players) {
                jerseys.push(game[teamKey].players[playerKey].number);
        }
        break;
    }
    return jerseys;
}


//Build a function, playerStats, that takes in an argument of a player's name 
//and returns an object of that player's stats. 
//Check out the following example of the expected return value 
//of the playerStats

function playerStats(playerName) {
    for (const teamKey in game) {
        if (game[teamKey].players[playerName] !== undefined)
            return game[teamKey].players[playerName];
    }
}



//Which player has the most points? Call the function mostPointsScored.
function mostPointsScored() {
    let highestPoints = -1
    let playerWithMostPoints = null;

    for (const teamKey in game) {
        for (const playerKey in game[teamKey].players) {
            const player = game[teamKey].players[playerKey];
            if (player.points > highestPoints) {
                highestPoints = player.points;
                playerWithMostPoints = playerKey;
            }            
        }
    }
    return playerWithMostPoints;
}

//Which team has the most points? Call the function winningTeam.
function winningTeam() {
  let homeTeamPoints = 0;
  let awayTeamPoints = 0;
  
  for (const teamKey in game) {
    for (const playerName in game[teamKey].players) {
        if (teamKey === 'home') {
            homeTeamPoints += game[teamKey].players[playerName].points;
        } else if (teamKey === 'away') {
            awayTeamPoints += game[teamKey].players[playerName].points;
        }
    }
  }

  if (homeTeamPoints > awayTeamPoints) {
    return game.home.teamName;
  } else if (awayTeamPoints > homeTeamPoints) {
    return game.away.teamName;
  } else {
    return "It's a tie";
  }

}

//Which player has the longest name? Call the function playerWithLongestName.

function playerWithLongestName() {
    let longestName = '';
    let playerWithLongestName = null;

    for (const teamKey in game) {
        for (const playerKey in game[teamKey].players) {
            if (playerKey.length > longestName.length) {
               longestName = playerKey;
               playerWithLongestName = playerKey;
            }
        }
    }
    return playerWithLongestName;
}

//Write a function that returns true if the player with the longest name had the most steals. 
//Call the function doesLongNameStealATon.
function doesLongNameStealATon() {
    let playerWithLongestName = null;
    let mostSteals = -1;

    for (const teamKey in game) {
        for (const playerKey in game[teamKey].players) {
            const player = game[teamKey].players[playerKey];
            if (playerKey.length > (playerWithLongestName ? playerWithLongestName.length : 0)) {
                playerWithLongestName = playerKey;
                mostSteals = player.steals;
            } else if (playerKey.length === playerWithLongestName.length && player.steals > mostSteals) {
                mostSteals = player.steals;
            }
        }
    }
    return playerWithLongestName ? true : false;
}