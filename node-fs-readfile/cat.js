const fs = require('fs');
const length = process.argv.length;
const count = 2;

function getAnytext(count) {
  if (count < length) {
    fs.readFile(process.argv[count], 'utf-8', (err, data) => {
      if (err) throw err;
      console.log(data);
    });
    count++;
    getAnytext(count);
  }
}

getAnytext(count);
