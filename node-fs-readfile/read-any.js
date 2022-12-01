const fs = require('fs');

const firstIndex = process.argv[2];

fs.readFile(firstIndex.toString(), (err, data) => {
  if (err) {
    return console.error(err);
  } else {
    console.log(data.toString());
  }
});
