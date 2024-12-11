const { addSchool, listSchools , deleteSchool } = require('../models/school.models.js');
const mySqlPool = require('../db.js');

// Add a new school
const addSchoolController = async (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    // Simple Validation
    if (!name || !address || !latitude || !longitude) {
        return res.status(400).json({ message: "All fields are required" });
    }

    if (typeof name !== 'string' || typeof address !== 'string') {
        return res.status(400).json({ message: "Name and Address must be strings" });
    }

    if (isNaN(latitude) || isNaN(longitude)) {
        return res.status(400).json({ message: "Latitude and Longitude must be numbers" });
    }

    try {
        await addSchool(name, address, latitude, longitude);
        const checkQuery = "SELECT * FROM schools WHERE name = ? AND address = ?";
        const [existingSchool] = await mySqlPool.query(checkQuery, [name, address]);

        if (existingSchool.length > 0) {
            res.status(500).json({message:"School with the same name and address already exists."});
        }

        // Insert the new school if no duplicates exist
        const insertQuery = "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
        const [result] = await mySqlPool.query(insertQuery, [name, address, latitude, longitude]);
        return res.status(200).json({message: "School added successfully.."});
    } catch (err) {
        console.error("Error adding school:", err);
        res.status(500).json({ message: "Error Occured at adding school" });
    }
};

// List all schools sorted by proximity
const listSchoolsController = async (req, res) => {
    const { latitude, longitude } = req.query;

    // Simple Validation
    if (!latitude || !longitude) {
        return res.status(400).json({ message: "Please provide both latitude and longitude" });
    }

    if (isNaN(latitude) || isNaN(longitude)) {
        return res.status(400).json({ message: "Latitude and Longitude must be numbers" });
    }

    try {
        const schools = await listSchools(latitude, longitude);
        res.status(200).json(schools);
    } catch (err) {
        console.error("Error fetching schools:", err);
        res.status(500).json({ message: "Error occured at fetching results" });
    }
};

// Delete school
const deleteSchoolController = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: "School ID is required." });
    }

    try {
        const result = await deleteSchool(id);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "School not found." });
        }

        res.status(200).json({ message: "School deleted successfully." });
    } catch (error) {
        res.status(500).json({ message: `Error deleting school: ${error.message}` });
    }
};


module.exports = {
    addSchoolController,
    listSchoolsController,
    deleteSchoolController
};
