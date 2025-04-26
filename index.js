import  express from 'express'
import productrouter from './src/app/products/ProductRouter.js'
import categoryrouter from './src/app/Categories/CategoryRouter.js';

const app = express()
const port = 9000

app.use('/api', productrouter);
app.use('/api', categoryrouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})