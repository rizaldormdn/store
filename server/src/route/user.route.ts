import express, { Router } from "express";
import { create, deleted, read, readById, update } from "../controller/user.controller";
import { authenticationToken } from "../middlewares/authentication.token";

const user = express.Router()
user.post('/users', authenticationToken, create)
user.get('/users', read)
user.get('/users/:id', readById)
user.put('/users/:id', update)
user.delete('/users/:id', deleted)


export default user