const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const db = require('./config/');
db.connect();
const router = require('./router/index');

app.use(cookieParser('admin'));
router(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})