import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
class authentication {
     public static hash = (password: string): Promise<string> => {
          return bcrypt.hash(password, 10)
     }
     public static compare = async (pass: string, encryptPass: string): Promise<boolean> => {
          let result = await bcrypt.compare(pass, encryptPass)
          return result
     }
     public static token = (id: number, username: string, email: string): string => {
          const secret: string = process.env.ACCESS_TOKEN || 'secret'
          const token: string = jwt.sign({ id, username, email }, secret, { expiresIn: process.env.EXP_TOKEN })
          return token
     }

}
export default authentication