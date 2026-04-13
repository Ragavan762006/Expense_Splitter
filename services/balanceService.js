const Expense = require('../models/Expense');

async function getBalances(groupId) {
  const expenses = await Expense.find({ group: groupId });

  const balances = {};

  for (const expense of expenses) {
    const share = expense.amount / expense.splitAmong.length;
    const payerId = expense.paidBy.toString();

    balances[payerId] = (balances[payerId] || 0) + expense.amount;

    for (const userId of expense.splitAmong) {
      const id = userId.toString();
      balances[id] = (balances[id] || 0) - share;
    }
  }

  const creditors = [];
  const debtors = [];

  for (const [userId, amount] of Object.entries(balances)) {
    if (amount > 0.01)  creditors.push({ userId, amount });
    if (amount < -0.01) debtors.push({ userId, amount: -amount });
  }

  const transactions = [];
  let i = 0, j = 0;

  while (i < creditors.length && j < debtors.length) {
    const credit = creditors[i];
    const debt   = debtors[j];
    const settle = Math.min(credit.amount, debt.amount);

    transactions.push({
      from:   debt.userId,
      to:     credit.userId,
      amount: Math.round(settle * 100) / 100
    });

    credit.amount -= settle;
    debt.amount   -= settle;

    if (credit.amount < 0.01) i++;
    if (debt.amount   < 0.01) j++;
  }

  return transactions;
}

module.exports = { getBalances };