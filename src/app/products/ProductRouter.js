import express from 'express'
import { allProducts, createProduct, deleteProduct, singleProduct, updateProduct } from './ProductController.js';

const productrouter = express.Router();

productrouter.get('/Products', allProducts);
productrouter.get('/GetProduct', singleProduct);
productrouter.post('/CreateProduct', createProduct);
productrouter.put('/UpdateProduct', updateProduct);
productrouter.delete('/Product/:id', deleteProduct);

export default productrouter;