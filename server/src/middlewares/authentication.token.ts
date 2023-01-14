import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'


export const authenticationToken = (req: Request, res: Response, next: NextFunction) => {
     try {
          const authToken = req.headers['authorization'] as string
          const token = authToken && authToken.split(' ')[1]
          if (token === null) {
               return res.status(401).json({ message: 'Unautorized' })
          }
          const cekToken = jwt.verify(token, process.env.JWT_TOKEN || 'secret')
          if (cekToken) {
               req.app.locals.cekToken = cekToken
               next()
          }
          return res.status(403)
     } catch (error) {
          res.status(500).json({
               message: error
          })
     }
}