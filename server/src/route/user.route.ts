import userController from "../controller/user.controller";
import baseRouter from "./base.route";


class userRoutes extends baseRouter {
     public routes(): void {
          this.router.post('/users', userController.create)
          this.router.get('/users', userController.read)
          this.router.get('/users/:id', userController.readById)
          this.router.put('/users/:id', userController.update)
          this.router.delete('/users/:id', userController.deleted)
     }
}
export default new userRoutes().router