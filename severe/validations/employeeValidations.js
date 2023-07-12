const { body } = require('express-validator');

exports.createEmployeeValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email format'),
  body('team').notEmpty().withMessage('Team is required'),
];

exports.updateEmployeeValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('team').notEmpty().withMessage('Team is required'),
];

exports.submitTimesheetValidation = [
  body('employeeId').notEmpty().withMessage('Employee ID is required'),
  body('weekStartDate').notEmpty().withMessage('Week start date is required').isISO8601().toDate(),
  body('hoursWorked').notEmpty().withMessage('Hours worked is required').isObject().custom((value) => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const keys = Object.keys(value);
    const isValid = keys.every((key) => days.includes(key) && Number.isInteger(value[key]));
    if (!isValid) {
      throw new Error('Invalid hours worked format');
    }
    return true;
  }),
  body('documents').isArray().withMessage('Documents must be an array'),
];
