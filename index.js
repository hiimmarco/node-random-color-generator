// Import the script for random color and chalk
const randomColor = require('randomcolor');
const chalk = require('chalk');

// Define variable to store hex value
let finC;

// Function for printing out a color
function getHex() {
  console.log(
    chalk.hex(finC)(`###############################
###############################
###############################
#####                     #####
#####      ${finC}        #####
#####                     #####
###############################
###############################
###############################
`),
  );
}

// If user inputs hue and luminosity

if (process.argv[2] && process.argv[3]) {
  finC = randomColor({
    hue: process.argv[2],
    luminosity: process.argv[3],
  });
  getHex();

  // If user types in 'ask'
} else if (process.argv[2] === 'ask') {
  console.log('Please type a color');
}

// If user types in hue
else if (process.argv[2]) {
  if (randomColor({ hue: process.argv[2] })) {
    finC = randomColor({ hue: process.argv[2] });
    getHex();
  }
}

// If user types in nothing
else {
  finC = randomColor();
  getHex();
}
