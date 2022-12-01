/* eslint-disable no-console */
const fs = require('fs');

const readFile = process.argv[2];
const copyFile = process.argv[3];

function copyText(readFile, copyFile) {
  fs.readFile(readFile, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      fs.writeFile(copyFile, data, err => {
        if (err) {
          console.log(err);
        }
      });
    }
  });
}

copyText(readFile, copyFile);
