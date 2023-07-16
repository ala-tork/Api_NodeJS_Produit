const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.9xczlus.mongodb.net/?retryWrites=true&w=majority')
//mongoose.connect('mongodb://localhost:27017')
.then(() => {
  console.log('Connected to the database!');
})
.catch((err) => {
  console.error('Error in connection:', err.message);
});

module.exports = mongoose;
