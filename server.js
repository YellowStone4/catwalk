const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist'));
app.use(express.json());

app.listen(port, () => {
    console.log("server is up and running on port: " + port);
});