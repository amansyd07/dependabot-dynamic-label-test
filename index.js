const express = require('express');
const _ = require('lodash');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Simple middleware
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  const data = _.shuffle([1, 2, 3, 4, 5]);
  res.json({ 
    message: 'Hello from Dependabot test application!', 
    shuffledData: data,
    timestamp: new Date().toISOString()
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', uptime: process.uptime() });
});

// Test endpoint that uses axios
app.get('/test-axios', async (req, res) => {
  try {
    const response = await axios.get('https://api.github.com/zen');
    res.json({ 
      message: 'Axios test successful', 
      githubZen: response.data 
    });
  } catch (error) {
    res.status(500).json({ error: 'Axios test failed' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Test the app at: http://localhost:${PORT}`);
});

module.exports = app;
