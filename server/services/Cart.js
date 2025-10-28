import { Cart } from "../models/Cart.js";

export const addCart = async  (req,res)=>{
    try{
        const {id} = req.body
        const cart = await Cart.create({user_id:id})
        res.status(201).json(cart)
    }catch(error){
        res.status(500).json({error:error.message})
    }

}
export const getCart = async  (req,res)=>{
    try{
        const {id} = req.body
        const cart = await Cart.findOne({where:{user_id:id}})
        res.status(201).json(cart)
    }catch(error){
        res.status(500).json({error:error.message})
    }

}
export const deleteCart = async  (req,res)=>{
    try{
        const {id} = req.params.id
         await Cart.destroy({where:{id}})
        res.status(201).json({message:"Cart deleted"})
    }catch(error){
        res.status(500).json({error:error.message})
    }

}

