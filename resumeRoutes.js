const express = require('express');
const router = express.Router();
const Resume = require('../models/resume');
const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post('/save', async (req, res) => {
  try {
    const newResume = new Resume(req.body);
    await newResume.save();
    res.status(201).json({ message: "Resume saved" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;
