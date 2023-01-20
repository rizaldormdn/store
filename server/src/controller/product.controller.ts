import { Request, Response } from "express"
import { Op } from "sequelize"
import Product from "../models/product.model"


export const create = async (req: Request, res: Response): Promise<Response> => {
     try {
          let products = await Product.create(req.body)
          return res.status(200).json({
               msg: 'Berhasil menambahkan product',
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
               msg: 'berhasil get all product',
               data: products
          })
     } catch (error) {
          return res.status(500).json(error)
     }
}
export const readById = async (req: Request, res: Response): Promise<Response> => {
     try {
          const { id } = req.params
          const products = await Product.findByPk(id)
          return res.status(200).json({
               msg: 'berhasil get product by id ',
               data: products
          })
     } catch (error) {
          return res.status(500).json(error)
     }
}
export const readCategory = async (req: Request, res: Response): Promise<Response> => {
     try {
          const category = req.query.category
          const products = await Product.findAll({
               where: {
                    category
               }
          })
          if (products.length === null) return res.status(400).json({ msg: 'product tidak ditemukan' })
          return res.status(200).json({
               msg: 'berhasil get product by category',
               data: products
          })
     } catch (error) {
          return res.status(500).json({ message: 'terjadi kesalahan' })
     }
}
export const productSearch = async (req: Request, res: Response): Promise<Response> => {
     try {
          const search = req.query.keyword
          const products = await Product.findAll({
               where: {
                    title: {
                         [Op.like]: '%' + search + '%'
                    }
               }
          })
          if (products.length === 0) return res.status(400).json({ msg: 'product tidak ditemukan' })
          return res.status(200).json({
               msg: 'berhasil mencari product',
               data: products
          })
     } catch (error) {
          return res.status(500).json({ message: 'terjadi kesalahan saat mengambil produk' })
     }
}
export const update = async (req: Request, res: Response): Promise<Response> => {
     try {
          const { id } = req.params
          await Product.update({ ...req.body }, { where: { id } })
          const products = await Product.findByPk(id)
          return res.status(200).json({
               msg: 'berhasil update product',
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
               msg: 'berhasil delete product',
               data: products
          })
     } catch (error) {
          return res.status(500).json(error)
     }
}