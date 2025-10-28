import sequelize from '../database/database.js'
import { DataTypes } from 'sequelize'
import { Order } from './Order.js'
import { Product} from './Product.js'

export const OrderItem = sequelize.define('OrderItem', {
  order_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Order,
      key: 'id',
    },
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'id',
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
})
