const mongoose = require('mongoose');
const connectDB = () => {
  mongoose
    .connect('<mongodb-connection-string>', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Failed to connect to MongoDB:', error);
    });
};
module.exports = connectDB;