import { Router } from "express";
import { create, deleted, read, readById, update } from "../controller/product.controller";
import express from 'express'

const product = express.Router()

product.post('/products', create)
product.get('/products', read)
product.get('/products/:id', readById)
product.put('/products/:id', update)
product.delete('/products/:id', deleted)

export default product