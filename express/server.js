const express = require('express');
const path = require('path');
const cors = require('cors');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();

app.use(express.json());
 // Cross-Origin Resource Sharing
 app.use(cors());
router.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, './dist/index.html'));
});
router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
router.post('/', (req, res) => res.json({ postBody: req.body }));

app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

// app.listen(HTTP_PORT,  () => {
//   console.log(`CORS-enabled web server listening on port ${HTTP_PORT}`)
// });

module.exports = app;
module.exports.handler = serverless(app);