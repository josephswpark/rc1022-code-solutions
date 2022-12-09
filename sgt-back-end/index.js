const express = require('express');
const app = express();
const pg = require('pg');

app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
  `;

  db.query(sql)
    .then(result => {
      const grade = (result.rows);
      res.status(200);
      res.json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const newStudent = req.body;
  const score = Number(newStudent.score);
  if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({
      error: '"score" must be a positive integer from 0 to 100'
    });
    return;
  }
  if ((!newStudent.name) || (!newStudent.course) || (!newStudent.score)) {
    res.status(400).json({
      error: '"name", "score", and "course" is a required field'
    });
    return;
  }

  const sql = `
    insert into "grades" ("name", "course", "score")
                  values ($1, $2, $3)
  returning *;
  `;

  const student = [newStudent.name, newStudent.course, newStudent.score];

  db.query(sql, student)
    .then(result => {
      const newInput = (result.rows[0]);
      res.status(201).json(newInput);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const newStudent = req.body;
  const score = Number(newStudent.score);
  if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({
      error: '"score" must be a positive integer from 0 to 100'
    });
    return;
  }
  if ((!newStudent.name) || (!newStudent.course) || (!newStudent.score)) {
    res.status(400).json({
      error: '"name", "score", and "course" is a required field'
    });
    return;
  }

  const sql = `
    update "grades"
       set "name" = $1,
           "course" = $2,
           "score" = $3
     where "gradeId" = $4
     returning *
  `;
  const params = [newStudent.name, newStudent.course, newStudent.score, gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
        return;
      }
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }

  const sql = `
    delete
    from "grades"
    where "gradeId" = $1
    returning *;
  `;

  const params = [gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
        return;
      }
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
