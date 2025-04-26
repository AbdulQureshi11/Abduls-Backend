import express from 'express';
import { allCategories, createCategory, deleteCategory, singleCategory, updateCategory } from './CategoryController.js';

const categoryrouter = express.Router();

categoryrouter.get('/Categories', allCategories);
categoryrouter.get('/SingleCategory', singleCategory);
categoryrouter.post('/CreateCategory', createCategory);
categoryrouter.put('/UpdateCategory', updateCategory);
categoryrouter.delete('/DeleteCategory', deleteCategory);

export default categoryrouter;