const fs = require('fs');
require('dotenv').config();

module.exports = {
	apiKey: process.env.API_KEY || ''
};

const key = {
	"apiKey": 1
};

// convert JSON object to string
const data = JSON.stringify(key);

// write JSON string to a file
fs.writeFile('key.json', data, (err) => {
if (err) {
	throw err;
}
  console.log('JSON data is saved.');
});