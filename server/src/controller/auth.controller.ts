import { Request, Response } from "express"
import User from "../models/user.model"
import authentication from "../middlewares/authentication"
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()

export const register = async (req: Request, res: Response): Promise<Response> => {
     try {
          const { username, email, password } = req.body

          const hashPassword: string = await authentication.hash(password)

          const users = await User.create({ username, email, password: hashPassword })

          return res.status(200).json({ msg: 'registrasi sukses', users })
     } catch (error) {
          return res.status(500).json(error)
     }
}
export const login = async (req: Request, res: Response): Promise<Response> => {
     try {
          const { email, password } = req.body;

          const users = await User.findOne({ where: { email } })

          if (!users) {
               return res.status(401).json({ msg: 'data tidak valid' })
          }

          const validate = await authentication.compare(password, users.password)

          if (!validate) {
               return res.status(400).json({ msg: 'data tidak valid' })
          }

          const userId = users.id
          const username = users.username
          const userEmail = users.email

          const generateToken = jwt.sign({ userId, username, userEmail }, process.env.JWT_TOKEN || 'secret', {
               expiresIn: '20s'
          })
          const refreshToken = jwt.sign({ userId, username, }, process.env.JWT_REFRESH_TOKEN || 'secret', {
               expiresIn: '1d'
          })
          await User.update({ token: refreshToken }, {
               where: {
                    id: userId
               }
          })
          res.cookie('refreshToken', refreshToken, {
               httpOnly: true,
               maxAge: 24 * 60 * 60 * 1000
          })
          return res.status(200).json({
               msg: 'berhasil',
               users,
               generateToken
          })
     } catch (error) {
          return res.status(400).json(error)
     }
}
export const logout = async (req: Request, res: Response): Promise<Response> => {
     try {
          const refreshToken = req.cookies.refreshToken
          if (!refreshToken) return res.status(204)
          const users = await User.findAll({
               where: {
                    token: refreshToken
               }
          })
          if (!users) return res.status(204)
          const userId = users[0].id
          await User.update({token: null}, {
               where: {
                    id: userId
               }
          })
          res.clearCookie('refreshToken')
          return res.status(200)
     } catch (error) {
          return res.status(500).json({error, msg: 'error'})
     }
}
export const refresh = async (req: Request, res: Response) => {
     try {
          const refreshToken = req.cookies.refreshToken
          if (!refreshToken) return res.status(401)
          const users = await User.findAll({
               where: {
                    token: refreshToken
               }
          })
          if (!users) return res.status(401)
          jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN || 'secret', (err: any, decode: any) => {
               if (err) return res.status(403)
               const userId = users[0].id
               const userEmail = users[0].email
               const username = users[0].username
               const accessToken = jwt.sign({ userId, userEmail, username }, process.env.JWT_TOKEN || 'secret', {
                    expiresIn: '20s'
               })
               return res.json({ accessToken })
          })
     } catch (error) {
          return res.status(500).send({ message: error })

     }
}
export const profile = async (req: Request, res: Response) => {
     try {
          res.send(res.app.locals.cekToken)
     } catch (error) {
          res.send(error)
     }
}