require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const resumeRoutes = require('./routes/resumeRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/resume', resumeRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("Mongo error", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server on http://localhost:${PORT}`));
