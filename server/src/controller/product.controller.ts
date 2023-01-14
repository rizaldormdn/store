import { Request, Response } from "express"
import Product from "../models/product.model"


export const create = async (req: Request, res: Response): Promise<Response> => {
     try {
          let products = await Product.create({ ...req.body })
          return res.status(200).json({
               msg: 'berhasil',
               data: products
          })
     } catch (error) {
          return res.status(500).json(error)
     }
}
export const read = async (req: Request, res: Response): Promise<Response> => {
     try {
          const products: Product[] = await Product.findAll()
          return res.status(200).json({
               msg: 'berhasil',
               data: products
          })
     } catch (error) {
          return res.status(500).json(error)
     }
}
export const readById = async (req: Request, res: Response): Promise<Response> => {
     try {
          const { id } = req.params
          const products: Product | null = await Product.findByPk(id)
          return res.status(200).json({
               msg: 'berhasil',
               data: products
          })
     } catch (error) {
          return res.status(500).json(error)
     }
}
export const update = async (req: Request, res: Response): Promise<Response> => {
     try {
          const { id } = req.params
          await Product.update({ ...req.body }, { where: { id } })
          const products = await Product.findByPk(id)
          return res.status(200).json({
               msg: 'berhasil',
               data: products
          })
     } catch (error) {
          return res.status(500).json(error)
     }
}
export const deleted = async (req: Request, res: Response): Promise<Response> => {
     try {
          const { id } = req.params
          const products: Product | null = await Product.findByPk(id)
          await Product.destroy({ where: { id } })
          return res.status(200).json({
               msg: 'berhasil',
               data: products
          })
     } catch (error) {
          return res.status(500).json(error)
     }
}