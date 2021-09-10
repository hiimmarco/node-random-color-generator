// Import the script for random color
const randomColor = require('randomcolor');

// Point the variable color to the function that creates a random color in hex
const color = randomColor();

// Logic for user input

let finC;

if (process.argv[2] && process.argv[3]) {
  if (randomColor({ hue: process.argv[2], luminosity: process.argv[3] })) {
    finC = randomColor({
      hue: process.argv[2],
      luminosity: process.argv[3],
    });
    console.log(
      randomColor({ hue: process.argv[2], luminosity: process.argv[3] }),
    );
  } else {
    console.log('Color does not exist');
  }
} else if (process.argv[2] === 'ask') {
  console.log('Please type a color');
} else if (process.argv[2]) {
  if (randomColor({ hue: process.argv[2] })) {
    console.log(randomColor({ hue: process.argv[2] }));
  } else {
    console.log('Color does not exist');
  }
} else {
  console.log(randomColor());
}

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
