import sequelize from '../database/database.js'
import { Cart } from './Cart.js'
import { Product } from './Product.js'
import { DataTypes } from 'sequelize'

export const CartItem = sequelize.define('CartItem', {
  cart_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Cart,
    },
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
    },
  },
  quantity:{
    type:DataTypes.INTEGER,
    allowNull:false
  }
})
