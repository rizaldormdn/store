import express from "express";
import { login, logout, profile, refresh, register } from "../controller/auth.controller";
import { authenticationToken } from "../middlewares/authentication.token";
import { validateRegister, validateLogin } from "../middlewares/validation";

const auth = express.Router()

auth.post('/auth/register', validateRegister, register)
auth.post('/auth/login', validateLogin, login)
auth.delete('/auth/logout', logout)
auth.get('/auth/profile', authenticationToken, profile)
auth.get('/auth/token', refresh)
export default auth