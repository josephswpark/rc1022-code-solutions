const express = require('express');
const path = require('path');
const app = express();

const absolute = path.join(__dirname, 'public');
app.use(express.static(absolute));

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
