const express = require('express');
const dotenv = require('dotenv');
const schoolRoutes = require('./routes/school.routes.js');

dotenv.config();

const app = express();
app.use(express.json()); // for parsing application/json

// Use school routes
app.use('/api', schoolRoutes);

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port number : ${process.env.PORT}`);
});
