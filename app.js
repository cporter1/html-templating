// This is a simple nodejs website using handlebars for templating

const express = require('express');
const app = express();
var path = require('path');

//Use the envioremt's port variable otherwise use port 8081
const port = process.env.port || 8081;

const hbs = require('express-handlebars');
app.set('view engine', 'hbs');

//Configures setting for handlebars
//Line 1: changes files to have .hbs 
//Line 2/3: tells handlebars where to find the layout and partial directories
app.engine( 'hbs', hbs( {
  extname: "hbs",
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
}));

app.use(express.static(path.join(__dirname, '/public')));

// response to: URL/ . Renders home view with index layout
app.get('/', (req, res) => {
	
	res.render('home' , {layout: 'index'});
});

// response to: URL/portfolio . Renders portfolio view with index layout
app.get('/portfolio', (req, res) => {
	
	res.render('portfolio' , {layout: 'index'});
});

// response to: URL/contact . Renders contact view with index layout
app.get('/contact', (req, res) => {
	
	res.render('contact' , {layout: 'index'});
});

//app listens on port variable
app.listen( port, () => console.log(`Online at port ${port}`));