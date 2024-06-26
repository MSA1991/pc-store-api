const express = require('express');
const cors = require('cors');

const categories = require('./data/categories.json');
const products = require('./data/products.json');

const app = express();

app.use(cors());

app.get('/categories', (req, res) => {
  res.json(categories);
});

app.get('/products', (req, res) => {
  const shuffleProducts = [...products].sort(() => Math.random() - 0.5);

  res.json(shuffleProducts);
});

app.get('/:products/:id', (req, res) => {
  const productCategory = req.params.products;
  const productId = req.params.id;
  const productFile = require(`./data/Products/${productCategory}.json`);
  const product = productFile.find((item) => item.id === productId);

  if (!product) {
    return res.status(404).send('Product not found');
  }

  res.json(product);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
