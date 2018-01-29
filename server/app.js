// import libraries
const path = require('path');
const express = require('express');
const expressHandlebars = require('express-handlebars');
const compression = require('compression');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
// const url = require('url');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const router = require('./router.js');

const app = express();

app.use('/assets', express.static(path.resolve(`${__dirname}/../hosted/`)));
app.use(favicon(`${__dirname}/../hosted/images/favicon.png`));
app.disable('x-powered-by');
app.use(compression());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/../views`);

router(app);

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Listening on port ${port}`);
});
