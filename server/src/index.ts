import express, { Application } from "express";
import sequelize from "./config/database";
import * as dotenv from "dotenv"
import cors from "cors"
import cookieParser from 'cookie-parser'
dotenv.config()

// router
import userRoute from "./route/user.route";
import productRoute from "./route/product.route";
import authRoute from "./route/auth.route";
import cartRoute from "./route/cart.route";

// model
import Product from "./models/product.model";
import  User from "./models/user.model"
import Cart from "./models/cart.model";

class App {
     public app: Application
     constructor() {
          this.app = express()
          this.middlewares()
          this.routes()
          this.database()
     }
     middlewares(): void {    
          this.app.use(cors({
               credentials: true
          }))
          this.app.use(cookieParser())
          this.app.use(express.json())
          this.app.use((_, res, next) => {
               res.setHeader('Access-Control-Allow-Origin', String(process.env.ORIGINS));
               res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
               res.setHeader('Access-Control-Allow-Headers', 'content-type');
               next();
          });
     }
     routes(): void {
          this.app.use(authRoute)
          this.app.use(userRoute)
          this.app.use(productRoute)
          this.app.use(cartRoute)
     }
     database(): void {
          sequelize.authenticate().then(() => {
               console.log('database connected');
               User.sync()
               Product.sync()
               Cart.sync()
          }).catch((error: any) => {
               console.log('error', error);
          })
     }
}
const app = new App().app
app.listen(process.env.PORT, () => {
     console.log(`server running on port: ${process.env.PORT}`);
})
