import {User} from "../models/User.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
export const register = async (req,res) =>{
try{
const {name,email,password} = req.body
if(!name || !email || !password){
    res.status(500).json({message:"Please provide all the fields"})
}
const user = await User.create({name,email,password})
res.status(201).json(user)
}catch(error){
    res.status(500).json({message:error.message})
}
}
export const login = async (req,res) =>{
try{
const {email,password} = req.body
if ( !email || !password) {
  res.status(500).json({ message: 'Please provide all the fields' })
}
const user = await User.findOne({where:{email}})
if(!user){
    res.status(500).json({ message: 'No user with this email' })
}
const isPasswordRight = await bcrypt.compare(password,user.password)
if(!isPasswordRight){
    res.status(500).json({ message: 'Incorrect password' })
}
const token = jwt.sign({},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRE})
res.status(201).json({token,name:user.name,id:user.id})
}catch(error){
    res.status(500).json({message:error.message})
}
}
export const getMyOrders = async (req,res) =>{
try{

}catch(error){
    res.status(500).json({message:error.message})
}
}
export const getMyCart = async (req,res) =>{
try{

}catch(error){
    res.status(500).json({message:error.message})
}
}