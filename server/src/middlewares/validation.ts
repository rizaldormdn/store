import { Request, Response, NextFunction } from "express";
import { check, validationResult } from 'express-validator'
import jwt from 'jsonwebtoken'
import multer from 'multer'
import path from 'path'

// validasi login / register
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

// validasi create product
export const product = [
     check('title').not()
          .isEmpty().withMessage('title is required'),
     check('description').not()
          .isEmpty().withMessage('description is required'),
     check('price').not()
          .isEmpty().withMessage('price is required'),
     check('stock').not()
          .isEmpty().withMessage('stock is required'),
     check('image').not()
          .isEmpty().withMessage('image is required'),
     check('category').not()
          .isEmpty().withMessage('category is required'),
     (req: Request, res: Response, next: NextFunction) => {
          const error = validationResult(req)
          if (!error.isEmpty()) {
               return res.status(400).json({ error: error.array() })
          }
     }
]

// validasi image
export const storage = multer.diskStorage({
     destination: function (req, file, cb) {
          cb(null, 'assets/')
     },
     filename: function (req, file, cb) {
          cb(null, file.fieldname + '' + Date.now() + path.extname(file.originalname))
     }
})
export const images = multer({ storage: storage })

// validasi token
export const token = (req: Request, res: Response, next: NextFunction) => {
     if (!req.headers['authorization']) {
          return res.status(401).json({ msg: 'unauthorized' })
     }
     const secret = process.env.ACCESS_TOKEN || 'secret'
     try {
          const token = req.headers['authorization'].split(' ')[1]
          const user = jwt.verify(token, secret)
          if (user) {
               next()
               req.app.locals.user = user
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
