const express = require('express');
const { addSchoolController, listSchoolsController } = require('../controllers/school.controllers.js');

const router = express.Router();

// Add a new school
router.post('/addSchool', addSchoolController);

// List schools sorted by proximity
router.get('/listSchools', listSchoolsController);


module.exports = router;
