import  express from 'express'
import productrouter from './src/app/products/ProductRouter.js'

const app = express()
const port = 9000

app.use('/api', productrouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})