const Employee = require('../models/Employee');
const Timesheet = require('../models/Timesheet');

// Add Employee
exports.addEmployee = async (req, res, next) => {
  try {
    const { name, email, team } = req.body;
    const employee = new Employee({ name, email, team });
    await employee.save();

    // Logic to register in Firebase Authentication

    res.status(201).json(employee);
  } catch (error) {
    next(error);
  }
};

// Update Employee
exports.updateEmployee = async (req, res, next) => {
  try {
    const { name, team } = req.body;
    const { employeeId } = req.params;

    const employee = await Employee.findByIdAndUpdate(
      employeeId,
      { name, team },
      { new: true }
    );

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.json(employee);
  } catch (error) {
    next(error);
  }
};

// Delete Employee
exports.deleteEmployee = async (req, res, next) => {
  try {
    const { employeeId } = req.params;

    const employee = await Employee.findByIdAndDelete(employeeId);

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    // Logic to delete employee from Firebase Authentication

    res.json(employee);
  } catch (error) {
    next(error);
  }
};

// Get All Employees
exports.getAllEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    next(error);
  }
};

// Approve Timesheet
exports.approveTimesheet = async (req, res, next) => {
  try {
    const { timesheetId } = req.params;

    const timesheet = await Timesheet.findByIdAndUpdate(
      timesheetId,
      { approved: true },
      { new: true }
    );

    if (!timesheet) {
      return res.status(404).json({ message: 'Timesheet not found' });
    }

    res.json(timesheet);
  } catch (error) {
    next(error);
  }
};

// Get All Timesheets (Calendar View)
exports.getAllTimesheets = async (req, res, next) => {
  try {
    const timesheets = await Timesheet.find();
    res.json(timesheets);
  } catch (error) {
    next(error);
  }
};
