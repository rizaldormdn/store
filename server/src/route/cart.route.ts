import express, { Router } from "express";
import { addToCart, deleteToCart, getCartById, getCartItem, updateCart } from "../controller/cart.controller";

const cart = express.Router()

cart.post('/carts', addToCart)
cart.get('/carts', getCartItem)
cart.get('/carts/:id', getCartById)
cart.put('/carts/:id', updateCart)
cart.delete('/carts/:id', deleteToCart)

export default cart