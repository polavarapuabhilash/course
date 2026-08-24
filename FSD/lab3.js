const fs = require('fs');
const content = [
  'HTML',
  'CSS',
  'Javascript',
  'Typescript',
  'MongoDB',
  'Express.js',
  'React.js',
  'Node.js'
].join('\n');
fs.writeFile('src.txt', content, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('src.txt has been created successfully!');
});