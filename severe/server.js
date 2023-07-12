const express = require('express');
const mongoose = require('mongoose');
const adminRoutes = require('./routes/adminRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const errorHandler = require('./utils/errorHandler');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/employees', adminRoutes);
app.use('/api/employee', employeeRoutes);

// Error handling middleware
app.use(errorHandler);

// MongoDB connection
mongoose
  .connect('mongodb+srv://greesh_5:munny123@cluster0.lvfzzc5.mongodb.net/staffminder', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });
