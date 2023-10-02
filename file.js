const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node 2', (err) => {
  if (err) {throw err};
  console.log('The file has been saved!');
});


fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {throw err};
  console.log(data);
});