import { Model, DataTypes, BelongsToMany } from 'sequelize'
import sequelize from '../config/database'
import Product from './product.model'
import User from './user.model'


class Cart extends Model {
     public id!: number
     public customerId!: number
     public productId!: number
     public quantity!: number

     public readonly createdAt!: Date
     public readonly updatedAt!: Date
}

Cart.init({
     id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
     },
     customerId: {
          type: DataTypes.INTEGER,
          references: {
               model: User,
               key: 'id'
          }
     },
     productId: {
          type: DataTypes.INTEGER,
          references: {
               model: Product,
               key: 'id'
          }
     },
     quantity: {
          type: DataTypes.INTEGER,
          allowNull: false,
     },
     createdAt: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW
     },
     updatedAt: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW
     }
}, {
     sequelize,
     tableName: 'carts'
});

Cart.belongsTo(User, { foreignKey: 'customerId' })
Cart.belongsTo(Product, { foreignKey: 'productId' })

export default Cart