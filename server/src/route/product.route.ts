import { create, deleted, productSearch, read, readById, readCategory, update } from "../controller/product.controller";
import express from 'express'
import { admin } from "../middlewares/authentication.token";

const product = express.Router()

product.post('/products', admin, create)
product.get('/products', read)
product.get('/products/:id', readById)
product.get('/products/category', readCategory)
product.get('/products/search', productSearch)
product.put('/products/:id', admin, update)
product.delete('/products/:id', admin, deleted)

export default product