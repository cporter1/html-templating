const express = require('express');
const app = express();
var path = require('path');

const port = process.env.port || 7000;

const hbs = require('express-handlebars');
app.set('view engine', 'hbs');

app.engine( 'hbs', hbs( {
  extname: "hbs",
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
}));

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
	
	res.render('home' , {layout: 'index'});
});

app.get('/portfolio', (req, res) => {
	
	res.render('portfolio' , {layout: 'index'});
});

app.get('/contact', (req, res) => {
	
	res.render('contact' , {layout: 'index'});
});

app.listen( port, () => console.log(`Online at port ${port}`));