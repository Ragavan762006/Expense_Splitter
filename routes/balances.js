const router = require('express').Router();
const { getBalances } = require('../services/balanceService');

router.get('/:groupId', async (req, res) => {
  try {
    const transactions = await getBalances(req.params.groupId);
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;