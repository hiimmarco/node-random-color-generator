// Import the script
const randomColor = require('randomcolor');

// Point the variable color to the function that creates a random color in hex
const color = randomColor();

//Print a random color
//console.log(randomColor({ hue: 'blue' }));


//Print a specified color


// If the user has entered a color
if (process.argv[2]) {
  // If the color exists, print it out
  if (randomColor({ hue: process.argv[2] })) {
    console.log(randomColor({ hue: process.argv[2] }));
  }
  // If the emoji does exist
  else {
    console.log('Emoji does not exist');
  }
}