import categorymodel from "../app/Categories/CategoryModel.js";
import sequelize from "./Config.js"
import { DataTypes, Sequelize } from "sequelize"

const db = {}

db.Sequelize;
db.sequelize;

db.category = categorymodel(DataTypes, sequelize);

export default db;