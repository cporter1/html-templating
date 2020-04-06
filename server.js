const express = require('express');
const app = express();
const port = 7000;

app.get('/', (req, res) => res.send("hello!"));

app.listen( port, () => console.log(`Online at port ${port}`));