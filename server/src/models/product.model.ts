import { Model, DataTypes } from 'sequelize'
import sequelize from '../config/database'


export class Product extends Model {
     public id!: number
     public title!: string
     public description!: string
     public price!: number
     public stock!: number
     public image!: string
     public category!: string

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
          allowNull: false
     },
     description: {
          type: DataTypes.STRING,
          allowNull: false
     },
     price: {
          type: DataTypes.DECIMAL,
          allowNull: false
     },
     stock: {
          type: DataTypes.DECIMAL,
          allowNull: false
     },
     image: {
          type: DataTypes.STRING,
          allowNull: true
     },
     category: {
          type: DataTypes.STRING,
          allowNull: false
     }
}, {
     sequelize,
     tableName: 'products'
});

export default Product