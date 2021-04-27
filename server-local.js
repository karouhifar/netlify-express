const app = require('./express/server');
const HTTP_PORT = process.env.PORT || 8080;
app.listen(HTTP_PORT, () => console.log(`Local app listening on port ${HTTP_PORT}!`));