const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('here');
    res.render('index', {text1: 'from service.js'});
}                                                                                                                             )
app.listen(3000);
