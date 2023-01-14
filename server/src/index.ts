import express, { Application } from "express";
import  sequelize from "./config/database";
import * as dotenv from "dotenv"
import cors from "cors"
import cookieParser from 'cookie-parser'
dotenv.config()

// router
import user from "./route/user.route";
import product from "./route/product.route";
import auth from "./route/auth.route";
import User from "./models/user.model";

class App {
     public app: Application

     constructor() {
          this.app = express()
          this.plugin()
          this.routes()
          this.database()
     }
     plugin(): void {
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
          this.app.use(auth)
          this.app.use(user)
          this.app.use(product)
     }
     database(): void {
          sequelize.authenticate().then(() => {
               console.log('database connected');
               User.sync()
          }).catch((e: any) => {
               console.log('error', e);
          })
     }
}
const app = new App().app
app.listen(process.env.PORT, () => {
     console.log(`server running on port: ${process.env.PORT}`);
})
