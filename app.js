const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('First AWS Setup for auto build/deploy... WHAT UP HANK!?'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
