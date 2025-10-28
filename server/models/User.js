import sequelize from "../database/database.js"
import { DataTypes } from "sequelize"
import bcrypt from "bcrypt"



export const User = sequelize.define(
    'User',
    {
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        }
    }
)

User.addHook("beforeCreate",async (user)=>{
user.password = await bcrypt.hash(user.password,await bcrypt.genSalt())
})


