import { Request, Response } from "express";
import User from "../models/user.model";

class userController {

     create = async (req: Request, res: Response): Promise<Response> => {
          try {
               let users = await User.create({ ...req.body })
               return res.status(200).json({
                    msg: 'berhasil',
                    data: users
               })
          } catch (error) {
               return res.status(500).json(error)
          }
     }
     read = async (req: Request, res: Response): Promise<Response> => {
          try {
               const users: User[] = await User.findAll({
                    attributes: ['id', 'username', 'email']
               })
               return res.status(200).json({
                    msg: 'berhasil',
                    data: users
               })
          } catch (error) {
               return res.status(500).json(error)
          }
     }
     readById = async (req: Request, res: Response): Promise<Response> => {
          try {
               const { id } = req.params
               const users: User | null = await User.findByPk(id)
               return res.status(200).json({
                    msg: 'berhasil',
                    data: users
               })
          } catch (error) {
               return res.status(500).json(error)
          }
     }
     update = async (req: Request, res: Response): Promise<Response> => {
          try {
               const { id } = req.params
               await User.update({ ...req.body }, { where: { id } })
               const users = await User.findByPk(id)
               return res.status(200).json({
                    msg: 'berhasil',
                    data: users
               })
          } catch (error) {
               return res.status(500).json(error)
          }
     }
     deleted = async (req: Request, res: Response): Promise<Response> => {
          try {
               const { id } = req.params
               const users: User | null = await User.findByPk(id)
               await User.destroy({ where: { id } })
               return res.status(200).json({
                    msg: 'berhasil',
                    data: users
               })
          } catch (error) {
               return res.status(500).json(error)
          }
     }
}
export default new userController()