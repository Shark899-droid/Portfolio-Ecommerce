import sequelize from "../database/database.js";
import { User } from "./User.js";
import { DataTypes } from "sequelize";

export const Cart = sequelize.define('Cart',{
    user_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:User,
            key:"id"
        }
    }
})
