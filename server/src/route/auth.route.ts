import authController from "../controller/auth.controller";
import { token } from "../middlewares/validation";
import { validate } from "../middlewares/validation";
import baseRouter from "./base.route";


class authRoutes extends baseRouter {
     routes(): void {
          this.router.post('/auth/register', validate, authController.register)
          this.router.post('/auth/login', validate, authController.login)
          this.router.get('/auth/profile', token, authController.profile)
     }
}
export default new authRoutes().router