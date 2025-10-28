import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import UserRouter from "./controllers/User.js"
import ProductRouter from "./controllers/Product.js"
import sequelize from "./database/database.js"
import { User } from './models/User.js'
import { Product } from './models/Product.js'
import { Cart } from './models/Cart.js'
import { CartItem } from './models/CartItem.js'
import { Order } from './models/Order.js'
import { OrderItem } from './models/OrderItem.js'
// Relazioni 1:1 (User <-> Cart)
User.hasOne(Cart, { foreignKey: 'user_id' });
Cart.belongsTo(User, { foreignKey: 'user_id' });

// Relazioni 1:N (Cart <-> CartItems)
Cart.hasMany(CartItem, { foreignKey: 'cart_id' });
CartItem.belongsTo(Cart, { foreignKey: 'cart_id' });

// Relazioni N:M (CartItem <-> Product)
Product.hasMany(CartItem, { foreignKey: 'product_id' });
CartItem.belongsTo(Product, { foreignKey: 'product_id' });

// Relazioni 1:N (User <-> Order)
User.hasMany(Order, { foreignKey: 'user_id' });
Order.belongsTo(User, { foreignKey: 'user_id' });

// Relazioni 1:N (Order <-> OrderItems)
Order.hasMany(OrderItem, { foreignKey: 'order_id' });
OrderItem.belongsTo(Order, { foreignKey: 'order_id' });

// Relazioni N:M (OrderItem <-> Product)
Product.hasMany(OrderItem, { foreignKey: 'product_id' });
OrderItem.belongsTo(Product, { foreignKey: 'product_id' });
dotenv.config()
const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use("/api/v1",UserRouter)
app.use("/api/v1",ProductRouter)
const port = process.env.PORT
const start = async () => {
  await sequelize.sync({ alter: true })
  app.listen(port, async () => {
    console.log(`Server listening on port ${port}`)
  })
}

start()
