const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/recruit_nova', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('Error in database connection:', err);
});

db.once('open', () => {
  console.log('Database connected successfully');
});

module.exports = db;