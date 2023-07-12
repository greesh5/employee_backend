const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        requried: true
    },
    email: {
        type: String,
        requried: true

    },
    team: {
        type: String,
        requried: true
    }
})

module.exports = mongoose.model('Employees', employeeSchema);