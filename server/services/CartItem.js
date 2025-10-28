import { CartItem } from "../models/CartItem.js";
import { getMyCart } from "./User.js";

export const getCartItems = async (req,res) =>{
    try{
        
        const cartItems = await CartItem.findAll()
        req.status(200).json(cartItems)
    }catch(error){
        res.status(500).json({error:error.message})
    }

}
export const addCartItem = async (req,res) =>{
    try{
        const {product_id,quantity} = req.body
        const cart = getMyCart()
        const cartItem = await CartItem.create({product_id,cart_id:cart.id,quantity})
        res.status(201).json(cartItem)
    }catch(error){
        res.status(500).json({error:error.message})
    }

}
export const getCartItem = async (req,res) =>{
    try{
        const cart = await CartItem.findOne({where:{id:req.params.id}})
    }catch(error){
        res.status(500).json({error:error.message})
    }

}
export const deleteCartItem = async (req,res) =>{
    try{
        await CartItem.destroy({where:{id:req.params.id}})

        res.status(200).json({message:`CartItem deleted`})
    }catch(error){ 
        res.status(500).json({error:error.message})
    }

}