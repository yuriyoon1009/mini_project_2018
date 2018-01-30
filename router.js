require('dotenv').config();

/*  DEPENDENCIES */
const express = require('express');
const bodyParser = require('body-parser');
const less = require('less');
const cors = require('cors');
const path = require('path');
const app = express();

const port = process.env.PORT || 5000;
const lessExpress = require('less-express');
// load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// compiles the less files
// app.use(require('less-middleware')({ src: __dirname + '/public' }));
// load public
app.use(express.static(path.join(__dirname, "public")));
// app.use(morgan("combined"));

// app.get('/css/style.css', lessExpress('./public/less/style.less'));

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

/*******************************
  Endpoint
*******************************/

app.get('/', function (req, res) {
    // res.send('Hello World!');
    res.render('index');
    // res.render('styles');
});

app.listen(port, () => console.log(`Server listening on port ${port}`));