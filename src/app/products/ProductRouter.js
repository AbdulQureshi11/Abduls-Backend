import express from 'express'
import { allProducts, createProduct, deleteProduct, singleProduct, updateProduct } from './ProductController.js';

const productrouter = express.Router();

productrouter.get('/Products', allProducts);
productrouter.get('/GetProduct', singleProduct);
productrouter.post('/CreateProduct', createProduct);
productrouter.put('/GetProduct', updateProduct);
productrouter.delete('/GetProduct', deleteProduct);

export default productrouter;