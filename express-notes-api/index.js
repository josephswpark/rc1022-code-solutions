const express = require('express');
const data = require('./data.json');
const app = express();
const fs = require('fs');

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const id in data.notes) {
    notesArray.push(data.notes[id]);
  }
  res.status(200);
  res.json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 0 || Number.isInteger(id) === false) {
    res.status(400);
    res.json({ error: 'id must be positive number' });
  } else if (!(id in data.notes)) {
    res.status(404);
    res.json({ error: 'cannot find note with id ' + id });
  } else {
    res.status(200);
    res.json(data.notes[id]);
  }
});

// fs.writeFile('/api/notes' ())

// const updateData = (data, err) => {
//   const updateData = JSON.stringify(data, null, 2);
//   fs.writeFile('./data.json', updateData, err);
// };

app.post('/api/notes', (req, res) => {
  const notes = req.body;
  if (notes.content === undefined) {
    res.status(400);
    res.json({ error: 'content is a required field' });
  } else {
    const id = data.nextId;
    notes.id = id;
    data.notes[id] = notes;
    data.nextId++;
    const updateData = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', updateData, err => {
      if (err) {
        console.error(err);
        res.status(500);
        res.json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201);
        res.json(notes);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
