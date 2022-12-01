const data = require('./data.json');
const fs = require('fs');
const execute = process.argv[2];

if (execute === 'read') {
  viewEntries();
} else if (execute === 'create') {
  createNewNotes(process.argv[3]);
} else if (execute === 'delete') {
  deleteById(process.argv[3]);
} else if (execute === 'update') {
  updateValue(process.argv[3], process.argv[4]);
}

function viewEntries() {
  for (const key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
}

function createNewNotes(value) {
  const id = data.nextId;
  data.notes[id] = value;
  data.nextId++;
  const addNextId = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', addNextId, err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
}

function deleteById(id) {
  delete data.notes[id];
  const deleteId = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', deleteId, err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
}

function updateValue(id, content) {
  data.notes[id] = content;
  const updateValue = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', updateValue, err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
}
