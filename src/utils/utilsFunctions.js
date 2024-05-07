const randomNumber = Math.floor(Math.random() * 1000); // Random number between 0 and 999
// Get current timestamp
const timestamp = new Date().getTime(); // Current timestamp in milliseconds
// Combine random number with timestamp
const result = `${randomNumber}_${timestamp}`;
return result;