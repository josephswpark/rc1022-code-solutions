
const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  var gradeArray = [];
  for (const key in grades) {
    gradeArray.push(grades[key]);
  }
  res.json(gradeArray);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  res.status(201);
  const student = req.body;
  student.id = nextId;
  grades[nextId] = student;
  nextId++;
  res.json(student);
});
