const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  group:       { type: mongoose.Schema.Types.ObjectId, ref: 'Group', required: true },
  paidBy:      { type: mongoose.Schema.Types.ObjectId, ref: 'User',  required: true },
  amount:      { type: Number, required: true },
  description: { type: String },
  splitAmong:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

module.exports = mongoose.model('Expense', ExpenseSchema);