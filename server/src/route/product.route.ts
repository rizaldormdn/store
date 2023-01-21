import productController from '../controller/product.controller';
import { token } from '../middlewares/validation';
import baseRouter from './base.route';

class productRoutes extends baseRouter {
     public routes(): void {
          this.router.post('/products', token, productController.create)
          this.router.get('/products', token, productController.read)
          this.router.get('/products/category', token, productController.readCategory)
          this.router.get('/products/search', token, productController.productSearch)
          this.router.put('/products/:id', token, productController.update)
          this.router.delete('/products/:id', token, productController.deleted)
     }
}
export default new productRoutes().router