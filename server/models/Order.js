import sequelize from '../database/database.js'
import { DataTypes } from 'sequelize'
import { User } from './User.js'

export const Order = sequelize.define('Order', {
user_id:{
    type:DataTypes.INTEGER,
    references:{
        model:User,
        key:"id"
    }
},
  order_status: {
    type: DataTypes.ENUM,
    values:["In elaborazione","Spedito","Annullato"],
    defaultValue:"In elaborazione"
  },
  total_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

})
