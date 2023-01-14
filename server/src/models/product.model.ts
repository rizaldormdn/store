import { Model, DataTypes } from 'sequelize'
import sequelize from '../config/database'


export class Product extends Model {
     public id!: number
     public title!: string
     public description!: string
     public price!: number
     public stock!: number
     public image!: string

     public readonly createdAt!: Date
     public readonly updatedAt!: Date
}
Product.init({
     id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
     },
     title: {
          type: DataTypes.STRING,
          unique: true,
     },
     description: {
          type: DataTypes.STRING,
          unique: true,
     },
     price: {
          type: DataTypes.STRING,
     },
     stock: {
          type: DataTypes.STRING,
     },
     image: {
          type: DataTypes.STRING
     }
}, {
     sequelize,
     tableName: 'products',
});

export default Product