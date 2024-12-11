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

































// const express = require("express");
// const dotenv = require("dotenv");
// const mySqlPool = require("./db");


// dotenv.config();

// const app = express();
// app.use(express.json());

// // // conditionaly listen
// mySqlPool.query('SELECT 1').then(() => {
//     // MY SQL
//     console.log('MY SQL DB CONNECTED..');
//     // listen
//     app.listen(8000,() => {
//         console.log('Server is running on port number 8000');
//     })
// }).catch((err) => {
//     console.log('Error Occured..',err);
// })
