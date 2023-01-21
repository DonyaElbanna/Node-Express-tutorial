const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1><a href='/api/products'>Products</a>");
});

app.get("/api/products", (req, res) => {
  //   res.json(products);    > instead of sending the whole data
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  //   console.log(newProducts);
  res.json(newProducts);
});

// getting info about each product  >  instead on hardcoding the ID
// app.get("/api/products/1", (req,res) => {
//     const singleProduct = products.find(product => product.id === 1)
//     // console.log(singleProduct)
//     res.json(singleProduct)
// })

app.get("/api/products/:productID", (req, res) => {
  //   console.log("req: ", req);
  //   console.log("req.params: ", req.params);

  const { productID } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  //   console.log(typeof Number(req.params.productID));
  //   console.log(singleProduct);

  //   if product is undefined
  if (!singleProduct) {
    return res.status(404).send("Product Does Not Exist");
  }
  res.json(singleProduct);
});

// getting reviews of each product
app.get("/api/products/:productID/reviews", (req, res) => {
  // console.log(req.params)
  const singleProductReviews = products.find(
    (product) => product.id === Number(req.params.productID)
  );
  // console.log(singleProductReviews.reviews)
  res.json(singleProductReviews.reviews);
});

// getting each review for each product
app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  //   console.log(req.params);
  //   console.log(Number(req.params.reviewID))
  const singleProductReviews = products.find(
    (product) => product.id === Number(req.params.productID)
  );

  const singleReview = singleProductReviews.reviews.find(
    (review) => review.id === Number(req.params.reviewID)
  );
  //   console.log(singleReview)
  if (!singleReview) {
    return res.status(404).send("No reviews found!");
  }
  res.json(singleReview);
});

// search queries
app.get("/api/v1/query", (req, res) => {
  // console.log(req.query)
  const { search, limit } = req.query;
  // console.log(search, limit)
  let sortedProducts = [...products];

  // filtering products starting with search value
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
    // res.json(sortedProducts);
  }

  //   limiting number of queries
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
    // console.log(sortedProducts)
  }

  //   if the user searches for an item that doesn't exist, the res will be successfult but will return an empty array
  if (sortedProducts.length < 1) {
    // return res.status(200).send("No products matched your search");
    // a more common approach
    // without return in if statement, express will be confused as to which response to send so errors will show in terminal
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("server listening on port 5000...");
});
