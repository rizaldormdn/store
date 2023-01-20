import { Request, Response, NextFunction } from "express";
import { check, validationResult } from 'express-validator'

export const validateRegister = [
     check('username').isString(),
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
export const validateLogin = [
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


