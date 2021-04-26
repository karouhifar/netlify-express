const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();
app.use(express.json());
app.use('/.netlify/functions/server', router); 
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});
router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
router.post('/', (req, res) => res.json({ postBody: req.body }));




module.exports = app;
module.exports.handler = serverless(app);