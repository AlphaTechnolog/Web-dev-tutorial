const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const path = require('path');
const env = require('./env');
const db = require('./db');

const authRoutes = require('./routes/auth');
const appRoutes = require('./routes/app');
const apiRoutes = require('./routes/api');

const hbsHelpers = require('./handlebars/helpers.js');

const app = express();

app.set('port', env('APP_PORT', 8000));

const hbs = exphbs.create({
  extname: '.hbs',

  helpers: hbsHelpers
});

app.use(morgan('dev'));
app.use(session({ secret: env('APP_SECRET') }));
app.use(cookieParser(env('APP_SECRET')));
app.use(flash());
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

app.use('/vendor', express.static(__dirname + '/vendor'));

app.use(authRoutes);
app.use('/app', appRoutes);
app.use('/api', apiRoutes);

app.listen(app.get('port'), async () => {
  await db();
  console.log(`Listening on port ${app.get('port')}`);
})
