const express = require('express');
const cors = require('cors');
const categories = require('./data/categories.json');

const app = express();

app.use(cors());

app.get('/categories', (req, res) => {
  try {
    setTimeout(() => {
      res.json(categories);
    }, 2000);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/:products/:id', (req, res) => {
  const productType = req.params.products;
  const productId = req.params.id;

  try {
    const productFile = require(`./data/Products/${productType}.json`);
    const product = productFile.find((item) => item.id === productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    setTimeout(() => {
      res.json(product);
    }, 2000);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
