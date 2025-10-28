import express from "express"

const router = express.Router()

import { getProduct,getProducts,addProduct,updateProduct,deleteProduct } from "../services/Product.js"

router.route("/product").get(getProducts).post(addProduct)
router.route("/product/:id").get(getProduct).put(updateProduct).delete(deleteProduct)

export default router