const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/ping', (req, res) => res.send({ data: 'test' }));

app.listen(process.env.PORT || 8080, () => console.log('Listening'));
