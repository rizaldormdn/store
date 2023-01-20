import { Request, Response } from "express";
import Cart from "../models/cart.model";
import Product from "../models/product.model";
import User from "../models/user.model";

export const addToCart = async (req: Request, res: Response): Promise<Response> => {
     try {
          const carts = await Cart.create(req.body)
          return res.status(200).json({
               msg: 'success',
               cart: carts
          })
     } catch (error) {
          return res.status(400).json({ error })
     }
}
export const getCartItem = async (req: Request, res: Response): Promise<Response> => {
     try {
          const carts = await Cart.findAll({
               include: [User, Product],
          })
          return res.status(200).json({
               msg: 'succes',
               cart: carts
          })
     } catch (error) {
          return res.status(400).json({ error })
     }
}
export const getCartById = async (req: Request, res: Response): Promise<Response> => {
     try {
          const { id } = req.params
          const carts = await Cart.findByPk(id)
          if (Cart.length === null) return res.status(400).json({ msg: 'cart tidak ditemukan' })
          return res.status(200).json({
               msg: 'berhasil get product by id ',
               data: carts
          })
     } catch (error) {
          return res.status(500).json(error)
     }
}
export const updateCart = async (req: Request, res: Response): Promise<Response> => {
     try {
          const { id } = req.params
          const carts = await Cart.update({ ...req.body }, { where: { id } })

          await Cart.findByPk(id)
          return res.status(200).json({
               msg: 'berhasil update product by id',
               data: carts
          })
     } catch (error) {
          return res.status(500).json(error)
     }
}
export const deleteToCart = async (req: Request, res: Response): Promise<Response> => {
     try {
          const { id } = req.params
          const carts = await Cart.findByPk(id)
          await Cart.destroy({ where: { id } })
          return res.status(200).json({
               msg: 'success'
          })
     } catch (error) {
          return res.status(400).json({ error })
     }
}