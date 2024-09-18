const express = require('express');
const cors = require('cors');

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

let coffeeMachineStatus = {
  isWorking: true,
  lastUpdated: new Date(),
};

// Get the current status of the coffee machine
app.get('/api/status', (req, res) => {
  res.json(coffeeMachineStatus);
});

// Update the status of the coffee machine
app.post('/api/status', (req, res) => {
  const { isWorking } = req.body;

  if (typeof isWorking !== 'boolean') {
    return res.status(400).json({ error: 'Invalid isWorking value' });
  }

  coffeeMachineStatus.isWorking = isWorking;
  coffeeMachineStatus.lastUpdated = new Date();

  res.json(coffeeMachineStatus);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
