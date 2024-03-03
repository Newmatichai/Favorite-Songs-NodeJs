const express =require("express");
const musicRouter = require('./music');
const morgan = require('morgan');

const app = express();
app.use(express.static('public'))
app.use(morgan('common', { immediate: true}));
app.use('/musics', musicRouter);

app.get('/', (request, response) => response.redirect('/musics'));

app.listen(8000, () => {
    console.log('Server is listening to http://localhost:8000')
});