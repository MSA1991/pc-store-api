const express = require('express');
const cors = require('cors');
const categories = require('./data/categories.json');

const app = express();

app.use(cors());

app.get('/categories', (req, res) => {
  setTimeout(() => {
    res.json(categories);
  }, 2000);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
