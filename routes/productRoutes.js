const express = require("express");
const {
  getProducts,
  createProduct,
  getAproduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

router.route("/").get(getProducts).post(createProduct);

router.route("/:id").get(getAproduct).put(updateProduct).delete(deleteProduct);

module.exports = router;
