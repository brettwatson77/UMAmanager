require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500;

app.get('/', (req, res) => {
  res.send('UMAmanager backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});