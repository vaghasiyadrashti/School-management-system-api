const express = require('express');
const { addSchoolController, listSchoolsController, deleteSchoolController  } = require('../controllers/school.controllers.js');

const router = express.Router();

// Add a new school
router.post('/addSchool', addSchoolController);

// List schools sorted by proximity
router.get('/listSchools', listSchoolsController);

// Delete school with id
router.delete("/deleteSchool/:id", deleteSchoolController);

module.exports = router;
