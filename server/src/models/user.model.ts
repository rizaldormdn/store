import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

export class User extends Model {
     public id!: number
     public username!: string
     public email!: string
     public password!: string
     public role!: string

     public readonly createdAt!: Date
     public readonly updatedAt!: Date
     static username: any;
}
User.init({
     id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
     },
     username: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false
     },
     email: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false
     },
     password: {
          type: DataTypes.STRING,
          allowNull: false
     },
     role: {
          type: DataTypes.ENUM('admin', 'user'),
          defaultValue: 'user'
     }
}, {
     sequelize,
     tableName: 'users',
});

export default User

