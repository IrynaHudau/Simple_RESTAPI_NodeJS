var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('./connection');

var indexRouter = require('./routes/index');
const { fstat } = require('fs');
const Product = require('./models/products');

var app = express();

// view engine setup
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.post('/products', (req, res)=> {
 
    const product = {
        id: products.length + 1,
        name: req.body.name,
        price : req.body.price,
        mrp: req.body.mrp,
        stock: req.body.stock,
        isPublished : false
    };
    Product.push(product);
    res.send(product);
    });

app.get('/products', (req,res)=> {
        res.send(Product);
        });
        
app.put('/products/<id>', (req, res) => {
    const product = Product.find(c=> c.id === parseInt(req.params.id));
 
    res.send(product);
});
         
module.exports = app;
