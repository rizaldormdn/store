import productController from '../controller/product.controller';
import { images, product, token } from '../middlewares/validation';
import baseRouter from './base.route';

class productRoutes extends baseRouter {
     public routes(): void {
          this.router.post('/products', images.single('image'), productController.create)
          this.router.get('/products', productController.read)
          this.router.get('/products/category', productController.readCategory)
          this.router.get('/products/search', productController.productSearch)
          this.router.put('/products/:id', productController.update)
          this.router.delete('/products/:id', productController.deleted)
     }
}
export default new productRoutes().router