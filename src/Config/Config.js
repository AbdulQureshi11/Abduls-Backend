import { Sequelize } from "sequelize";

const sequelize = new Sequelize('Project3-db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

sequelize
    .authenticate()
    .then(() => console.log("Database Connect Sccuessfully"))
    .catch(() => console.log("Database Not Connected"))

export default sequelize; 