import Product from "../models/product.model.js";
import errorHandler from "./error.controller.js";

const list = async (req, res, next) => {
  if (req.query.name) {
    return next();
  }
  try {
    let products = await Product.find({});
    res.json(products);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
const read = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id).exec();
    if (!product)
      return res.status("400").json({
        error: "Product not found",
      });
    res.json(product);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
const create = async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    return res.status(200).json({
      message: "Successfully created product",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const update = async (req, res) => {
  try {
    Product.findByIdAndUpdate(req.params.id, req.body).exec();
    res.status(200).json({ message: "Update successful" });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const remove = async (req, res) => {
  try {
    Product.findByIdAndRemove(req.params.id).exec();
    res.json({ message: "Deletion Successful" });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const removeAll = async (req, res) => {
  try {
    Product.deleteMany().exec();
    res.json({ message: "All products deleted successfully" });
  } catch (err) {
    res.json({
      message: "Something went wrong",
    });
  }
};

const findByName = async (req, res) => {
  try {
    const keyword = req.query.name;
    let products = await Product.find({
      name: { $regex: keyword, $options: "i" },
    });

    res.json(products);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

export default {
  list,
  read,
  create,
  update,
  remove,
  removeAll,
  findByName,
};
