const express = require('express');
const ManagerProducts = require('./managers/ManagerProducts');

const manager = new ManagerProducts();

//inicializo
const app = express();

app.get('/products', (req, res) => {
  // const products = manager.getProductById(8);
  const products = manager.getProducts();
  console.log(products);  

  console.log(req.query);
  if (req.query.limit) {
    return res.send("Aqui va el filtro")
  } else {
    const productss = manager.getProducts()
    return res.send(productss)
  }
  res.send(users);
})



app.get('/saludo', (req, res) => {
  res.status(201).send("Hola a todos, pero ahora desde Express!")
})

app.get('/otracosa', (req, res) => {
  res.status(201).send("Otra cosa!")
})

// params
app.get('/users/:userId', (req, res) => {
  console.log(req.params);
  const userId = req.params.userId;
  const user = users.find(user => user.id === +userId);
  if (!user) {
   return res.status(400).send("User not found");
  }
  res.send(user)
})

// query
app.get('/users', (req, res) => {
  console.log(req.query);
  if (req.query.gender) {
    const filteredUsers = users.filter(user => user.gender === req.query.gender)
    return res.send(filteredUsers)
  }
  res.send(users);
})



// 
  // http://localhost:8080/products?limit=10


app.get('/products', (req, res) => {
  let products = manager.getProducts();
  console.log(products);  
  // console.log(manager.getProducts())
  console.log(req.query);
  if (req.query.limit) {
    // const filteredUsers = users.filter(user => user.gender === req.query.gender)
    // return res.send(filteredUsers)
    return res.send("Aqui va el filtro")
  } else {
    const productss = manager.getProducts()
    return res.send(productss)
  }
  res.send(users);
})


//puesta en marcha
app.listen(8080, () => {
  console.log("Server is up and running on port 8000");
})


// const ManagerProducts = require('./managers/ManagerProducts');

// const manager = new ManagerProducts('./data/Products.json');

// const productsManager = async () => {
//   try {
    
//     console.log("**** First Query ****");
//     let products = await manager.getProducts();
//     console.log(products);

//     console.log("**** Add Prod 1 ****");
//     const newProduct1 = {
//       title: "Cerveza IPA", 
//       description: "Elaborada con Sauco de Bariloche", 
//       price: 580, 
//       thumbnail: "", 
//       code: "CERV0001", 
//       stock: 50 
//     };
//     const product1Result = await manager.addProducts(newProduct1);
//     console.log(product1Result);

//     console.log("**** Add Prod 2 ****");
//     const newProduct2 = {
//       title: "Alambrado Malbec", 
//       description: "Vino Tinto de Altura", 
//       price: 3100, 
//       thumbnail: "", 
//       code: "MALB0001", 
//       stock: 10 
//     };
//     const product2Result = await manager.addProducts(newProduct2);
//     console.log(product2Result);    


//     console.log("**** Add Prod 3 ****");
//     const newProduct3 = {
//       title: "Sidra Rex", 
//       description: "Sidra para Navidad", 
//       price: 700, 
//       thumbnail: "", 
//       code: "SID0001",
//       stock: 100 
//     };
//     const product3Result = await manager.addProducts(newProduct3);
//     console.log(product3Result);    


//     console.log("**** Second Query ****");
//     products = await manager.getProducts();
//     console.log(products);

//     console.log("**** getProductById");
//     products = await manager.getProductById(2);
//     products ? console.log(products) : console.log("Product Not Found")

//     console.log("**** updateProduct ****");
//     products = await manager.updateProduct(3,{price:78900});
//     console.log(products);

//     // console.log("**** deleteProduct ****");
//     // products = await manager.deleteProduct(2);
//     // products ? console.log(products) : console.log("Product Not Found")

//   }
//   catch(error) {
//     console.log(error);
//   }
// } 

// productsManager();