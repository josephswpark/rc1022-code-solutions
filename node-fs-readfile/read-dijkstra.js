const fs = require('fs');
fs.readFile('dijkstra.txt', (err, data) => {
  if (err) {
    return console.error(err);
  }
  console.log(data.toString());
});
