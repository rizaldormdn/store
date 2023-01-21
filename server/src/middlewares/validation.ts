import { Request, Response, NextFunction } from "express";
import { check, validationResult } from 'express-validator'
import jwt from 'jsonwebtoken'

export const validate = [
     check('email').isEmail(),
     check('password').isLength({ min: 6 }),
     (req: Request, res: Response, next: NextFunction) => {
          const error = validationResult(req)

          if (!error.isEmpty()) {
               return res.status(400).send({ error: error.array() })
          }
          next()
     }
]
export const token = (req: Request, res: Response, next: NextFunction) => {
     if (!req.headers['authorization']) {
          return res.status(401).json({ msg: 'unauthorized' })
     }
     const secret = process.env.ACCESS_TOKEN || 'secret'
     try {
          const token: string = req.headers['authorization'].split(' ')[1]
          const user = jwt.verify(token, secret)
          if (user) {
               next()
               req.app.locals.user = user
          }
          // return res.status(400).json({ msg: 'token invalid' })
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
