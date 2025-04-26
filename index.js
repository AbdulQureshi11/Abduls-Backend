import express from 'express'
import bodyParser from 'body-parser'
import productrouter from './src/app/products/ProductRouter.js'
import categoryrouter from './src/app/Categories/CategoryRouter.js';
import sequelize from './src/Config/Config.js';

const app = express()
const port = 9000

app.use(bodyParser.json())
app.use('/api', productrouter);
app.use('/api', categoryrouter);

sequelize
  .sync({ force: true })
  .then(() => app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  }))
  .catch(() => console.log("Database Not Connected"))