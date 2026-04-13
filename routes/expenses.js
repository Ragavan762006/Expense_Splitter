const router = require('express').Router();
const Expense = require('../models/Expense');

router.post('/', async (req, res) => {
  try {
    const expense = await Expense.create(req.body);
    res.status(201).json(expense);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/group/:groupId', async (req, res) => {
  try {
    const expenses = await Expense.find({ group: req.params.groupId }).populate('paidBy', 'name').populate('splitAmong', 'name');
    res.json(expenses);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;