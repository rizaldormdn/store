import { Request, Response } from "express"
import User from "../models/user.model"
import authentication from "../middlewares/authentication"
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()

class authController {
     register = async (req: Request, res: Response): Promise<Response> => {
          try {
               const { username, email, password } = req.body
               const hashPassword: string = await authentication.hash(password)
               const users = await User.create({
                    username,
                    email,
                    password: hashPassword
               })
               return res.status(200).json({
                    msg: 'registrasi sukses',
                    users
               })
          } catch (error) {
               return res.status(500).json(error)
          }
     }
     login = async (req: Request, res: Response): Promise<Response> => {
          try {
               const { email, password } = req.body;
               const user = await User.findOne({
                    where: {
                         email
                    }
               })
               if (!user) {
                    return res.status(401).json({ msg: 'data tidak valid' })
               }
               const validate = await authentication.compare(password, user.password)
               if (!validate) {
                    return res.status(401).json({ msg: 'data tidak valid' })
               }
               const token = authentication.token(user.id, user.username, user.email)
               return res.status(200).json({
                    msg: 'login success',
                    token
               })
               // access_token: jwt.sign({ users }, process.env.ACCESS_TOKEN || 'secret', { expiresIn: process.env.EXP_TOKEN }),
               // refresh_token: jwt.sign({ users }, process.env.JWT_REFRESH_TOKEN || 'secret')
          } catch (error) {
               return res.status(400).json(error)
          }
     }
     profile = async (req: Request, res: Response) => {
          try {
               res.send(res.app.locals.user)
          } catch (error) {
               res.send(error)
          }
     }
}
export default new authController()