const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students');

var Student = require('../models/studentSchema');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/load', (req, res, next) => {
  Student.find({}, function(err, students) {
    if(err) return res.status(500).json({errorMessage: err});
    res.status(200).json(students);
    console.log(`All students loaded from database.`);
  });
});

app.post('/insert', (req, res, next) => {
  let newStudent = new Student({
    first: req.body.first,
    last: req.body.last,
    status: 0
  });

  newStudent.save(function(err, student) {
    if(err) return res.status(500).json({errorMessage: err});
    res.status(200).json({insertMessage: student});
    console.log(`${student.name} added to the database.`);
  });
});

app.put('/update', (req, res, next) => {
  Student.findById(req.body._id, function(err, student) {
    if(err) return res.status(500).json({errorMessage: err});

    //this can probably be made more efficient by only updating the fields which are being changed, possibly using PATCH instead of PUT
    student._id = req.body._id;
    student.first = req.body.first;
    student.last = req.body.last;
    student.status = req.body.status;

    student.save(function(err, student) {
      if(err) return res.status(500).json({errorMessage: err});
      res.status(200).json(student);
      console.log(`${student.first} was successfully updated.`);
    });
  });
});

app.delete('/delete/:id', (req, res, next) => {
  Student.findByIdAndRemove({_id: req.params.id}, function(err, student) {
    if(err) return res.status(500).json({errorMessage: err});
    res.status(200).json(`${student.name} was successfully deleted from the database.`);
    console.log(`${student.name} was successfully deleted from the database.`);
  });
});

app.listen(port, () => console.log('Server running on port 3000!'));