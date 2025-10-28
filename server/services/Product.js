import { Product } from '../models/Product.js'

export const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll()
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
export const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(201).json(product)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.update(req.body,{where:{id:req.params.id}})
    res.status(201).json(product)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
export const getProduct = async (req, res) => {
  try {
    const product = await Product.findOne({where:{id:req.params.id}})
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
export const deleteProduct = async (req, res) => {
  try {
    await Product.destroy({where:{id:req.params.id}})
    res.status(200).json({message:`Product with id ${req.params.id} as been deleted`})
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
