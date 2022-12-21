const express = require('express');
const ManagerProducts = require('./managers/ManagerProducts');

const manager = new ManagerProducts('./data/Products.json');

//inicializo
const app = express();

app.get('/products', async(req, res) => {
    const products = await manager.getProducts();
  if (req.query.limit) {
    return res.send(products.slice(0, req.query.limit));
  } 
  res.send(products);
})

app.get('/products/:productId', async(req, res) => {
  const products = await manager.getProductById(Number(req.params.productId));
  if (!products) {
    return res.status(400).send("User not found");
  }
  res.send(products);
})

//puesta en marcha
app.listen(8080, () => {
  console.log("Server is up and running on port 8000");
})


//prueba
// http://127.0.0.1:8080/products
// http://127.0.0.1:8080/products?limit=10
// http://127.0.0.1:8080/products:5
