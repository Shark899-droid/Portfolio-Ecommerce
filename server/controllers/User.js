import express from "express"

const router = express.Router()

import { register,login,getMyCart,getMyOrders } from "../services/User.js"

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/getOrders").post(getMyOrders)
router.route("/getCart").post(getMyCart)

export default router
