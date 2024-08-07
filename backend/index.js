const mongoose = require('mongoose');

// Replace the URI with your MongoDB URI
const dbURI = 'mongodb://localhost:27017/my_database'; 

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
