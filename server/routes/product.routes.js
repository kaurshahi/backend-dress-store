import express from "express";
import productCtrl from "../controllers/product.controller.js";

const router = express.Router();
router.get("/api/products", productCtrl.list);
router.get("/api/products/:id", productCtrl.read);
router.post("/api/products", productCtrl.create);
router.put("/api/products/:id", productCtrl.update);
router.delete("/api/products/:id", productCtrl.remove);
router.delete("/api/products", productCtrl.removeAll);
router.get("/api/products", productCtrl.findByName);

export default router;
