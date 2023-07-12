const mongoose = require('mongoose');

const timesheetSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.objectId,
        ref: 'Employee',
        required: true
    },
    weekStartDate: {
        type: Date,
        required: true
    },
    hoursWorked: {
        type: object,
        required: true
    },
    documents: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Timesheet', timesheetSchema);