const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // ✅ Step 1: Check if user exists
  const user = await User.findOne({ username, password }); // For demo only — no password hashing

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // ✅ Step 2: Create JWT token here ⬇️⬇️⬇️
  const token = jwt.sign(
    { userId: user._id },              // payload
    process.env.JWT_SECRET,           // secret from .env
    { expiresIn: '1h' }               // token valid for 1 hour
  );

  // ✅ Step 3: Send token back to client
  res.json({ message: 'Login successful', token });
});

module.exports = router;
