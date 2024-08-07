// backend/api.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

// Initialize Express
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Failed to connect to MongoDB:', error));

// Define a schema and model for the data
const DataSchema = new mongoose.Schema({}, { strict: false });
const DataModel = mongoose.model('DataCollection', DataSchema, 'my_collection');

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

// API endpoint to retrieve data
app.get('/api/data', async (req, res) => {
    try {
        const data = await DataModel.find({});
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving data', error });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
