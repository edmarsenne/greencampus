const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.get('/api/status', (req, res) => {
  res.json({ message: 'API GreenCampus online' });
});

app.listen(3001, () => console.log('Servidor rodando em http://localhost:3001'));
