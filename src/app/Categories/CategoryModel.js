import { DataTypes, Sequelize } from "sequelize"
import sequelize from "../../Config/Config.js";


const categorymodel = (DataType, Sequelize) => {
    return sequelize.define('Category', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        }
    })
}

export default categorymodel;