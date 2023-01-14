import mysql from "mysql2"
import { Sequelize } from "sequelize-typescript"
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize("store", "root", "root", {
     dialect: "mysql",
     host: "localhost",
     logging: false,

});

export default sequelize;

