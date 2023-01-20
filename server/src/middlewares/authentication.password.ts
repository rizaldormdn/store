import bcrypt from 'bcrypt'

class authentication {
     public static hash = (password: string): Promise<string> => {
          return bcrypt.hash(password, 10)
     }
     public static compare = async (pass: string, encryptPass: string): Promise<boolean> => {
          let result = await bcrypt.compare(pass, encryptPass)
          return result
     }
}
export default authentication