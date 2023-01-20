import express, { Router } from "express";
import { create, deleted, read, readById, update } from "../controller/user.controller";

const user = express.Router()
user.post('/users', create)
user.get('/users', read)
user.get('/users/:id', readById)
user.put('/users/:id', update)
user.delete('/users/:id', deleted)


export default user