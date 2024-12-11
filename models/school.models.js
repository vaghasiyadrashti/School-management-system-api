const mySqlPool = require('../db');

// Add a new school
const addSchool = async (name, address, latitude, longitude) => {
    const query = "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
    const [result] = await mySqlPool.query(query, [name, address, latitude, longitude]);
    return result;
};

// Get all schools sorted by proximity
const listSchools = async (latitude, longitude) => {
    const query = `
        SELECT *, 
        (6371 * acos(cos(radians(?)) * cos(radians(latitude)) * cos(radians(longitude) - radians(?)) + sin(radians(?)) * sin(radians(latitude)))) AS distance
        FROM schools
        ORDER BY distance ASC
    `;
    const [schools] = await mySqlPool.query(query, [latitude, longitude, latitude]);
    return schools;
};

// Delete the school
const deleteSchool = async (id) => {
    const query = "DELETE FROM schools WHERE id = ?";
    const [result] = await mySqlPool.query(query, [id]);
    return result;
};

module.exports = {
    addSchool,
    listSchools,
    deleteSchool
};
