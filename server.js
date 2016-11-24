var express = require('express'),
path = require('path'),
app = express(),
port = 8000,
bodyParser = require('body-parser');
require('node-jsx').install();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require('./app/routes/coreRoutes.js')(app);

app.get('*', function(req, res) {
    res.json({
        'route': 'Sorry this page does not exist!'
    });
});

app.listen(port);
console.log('Server is Up and Running at Port : ' + port);
