# School Management API

This project is a Node.js based API for managing school data. It allows users to add new schools, retrieve a list of schools from a database. 
The API uses Express.js for routing, MySQL as the database, and follows a RESTful API structure.

## Features

- Add a new school
- List all schools sorted by proximity to a given location

## Tech Stack

- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for building the API.
- **MySQL**: Relational database for storing school data.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/vaghasiyadrashti/School-management-system-api.git


Testing endpoints example :

Add School :-

method : POST = https://school-management-system-6jeg.onrender.com/api/addSchool

{
  "name": "Green Valley High School",
  "address": "123 Elm Street, Springfield",
  "latitude": 40.73061,
  "longitude": -73.935242
}

List School :-

method : GET = https://school-management-system-6jeg.onrender.com/api/listSchools?latitude=40.73061&longitude=-73.935242


