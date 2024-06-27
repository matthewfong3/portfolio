// import libraries
const router = require('./router.js');

const bodyParser = require('body-parser');

const compression = require('compression');

const ejs = require('ejs');

const express = require('express');

const favicon = require('serve-favicon');

const path = require('path');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const app = express();

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.set('views', `${__dirname}/../views`);

app.disable('x-powered-by');

app.use('/assets', express.static(path.join(__dirname, '/../hosted')));

app.use(favicon(path.join(__dirname, '../hosted/images/favicon.png')));

app.use(bodyParser.urlencoded({ extended:false }));

app.use(bodyParser.json());

app.use(compression());

router(app);

app.listen(port, (err) => {
    if(err) throw err;
    console.log(`Listening on port ${port}`);
});