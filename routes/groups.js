const router = require('express').Router();
const Group = require('../models/Group');

router.post('/', async (req, res) => {
  try {
    const group = await Group.create(req.body);
    res.status(201).json(group);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const groups = await Group.find().populate('members', 'name email');
  res.json(groups);
});

router.post('/:id/members', async (req, res) => {
  try {
    const group = await Group.findByIdAndUpdate(req.params.id, { $push: { members: req.body.userId } }, { new: true });
    res.json(group);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;