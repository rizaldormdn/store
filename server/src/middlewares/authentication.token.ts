import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'


export const token = (req: Request, res: Response, next: NextFunction) => {
     try {
          const headers = req.headers['authorization'] as string
          const token = headers && headers.split(' ')[1]

          const decoded = jwt.verify(token, process.env.ACCESS_TOKEN || 'secret')
          if (decoded) {
               req.app.locals.decoded = decoded
               next()
          }
     } catch (error) {
          res.status(500).json({
               message: error
          })
     }
}
export const admin = (req: Request, res: Response, next: NextFunction) => {
     try {
          const headers = req.headers['authorization'] as string
          const token = headers && headers.split(' ')[1]

          const decoded = jwt.verify(token, process.env.ACCESS_TOKEN || 'secret')
          if (decoded === 'admin') {
               next()
          } else {
               res.status(400).json({ msg: 'not authorized' })
          }
     } catch (error) {
          res.status(500).json({
               message: error
          })
     }
}