// Import the script for random color
const randomColor = require('randomcolor');

// Point the variable color to the function that creates a random color in hex
const color = randomColor();

// Logic for user input

let finC;

// If user inputs hue and luminosity

if (process.argv[2] && process.argv[3]) {
  if (randomColor({ hue: process.argv[2], luminosity: process.argv[3] })) {
    finC = randomColor({
      hue: process.argv[2],
      luminosity: process.argv[3],
    });
    console.log(`###############################
###############################
###############################
#####                     #####
#####      ${finC}        #####
#####                     #####
###############################
###############################
###############################
`);
  } else {
    console.log('Color does not exist');
  }

  // If user types in 'ask'
} else if (process.argv[2] === 'ask') {
  console.log('Please type a color');
}

// If user types in hue
else if (process.argv[2]) {
  if (randomColor({ hue: process.argv[2] })) {
    finC = randomColor({ hue: process.argv[2] });
    console.log(`###############################
###############################
###############################
#####                     #####
#####      ${finC}        #####
#####                     #####
###############################
###############################
###############################
`);
  } else {
    console.log('Color does not exist');
  }
}

// If user types in nothing
else {
  finC = randomColor();
  console.log(`###############################
###############################
###############################
#####                     #####
#####      ${finC}        #####
#####                     #####
###############################
###############################
###############################
`);
}
