import cartController from "../controller/cart.controller";
import baseRouter from "./base.route";

class cartRoutes extends baseRouter {
     routes(): void {
          this.router.post('/carts', cartController.addToCart)
          this.router.get('/carts', cartController.getCartItem)
          this.router.get('/carts/:id', cartController.getCartById)
          this.router.put('/carts/:id', cartController.updateCart)
          this.router.delete('/carts/:id', cartController.deleteToCart)
     }
}

export default new cartRoutes().router