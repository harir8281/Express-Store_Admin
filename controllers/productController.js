const getProducts = (req, res) => {
  res.json("getProducts");
};

const createProduct = (req, res) => {
  console.log(req.body);
  res.json("createProducts");
};

const getAproduct = (req, res) => {
  res.json("get a Product");
};

const updateProduct = (req, res) => {
  res.json("update");
};

const deleteProduct = (req, res) => {
  res.json("delete");
};

module.exports = {
  getProducts,
  createProduct,
  getAproduct,
  updateProduct,
  deleteProduct,
};
