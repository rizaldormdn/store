import { Router } from "express"

abstract class baseRouter {
     public router: Router;

     constructor() {
          this.router = Router()
          this.routes()
     }

     abstract routes(): void
}

export default baseRouter